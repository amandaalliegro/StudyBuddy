const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
let salt = bcrypt.genSaltSync(10);
// const { getPostsByUsers, findAccount, addUser } = require('../helpers/dataHelpers');
module.exports = ({ 
  getUsers, getUserByEmail, addUser, getUsersPosts, getSpecificUser, editUser}) => {
  /* GET users listing. */
  // name space defined in app.js /api/users
  // axios in app.js on client 
  router.get('/:id', function(req, res){
    getSpecificUser(req.params.id)
      .then(data => res.json({user: data.rows[0]}))
  })
  router.get('/', function (req, res) {
    getUsers()
      .then(users => res.json(users))
      .catch(err => res.json({ msg: err.message }))
  });
  router.get('/posts', (req, res) => {
    getUsersPosts()
      .then((usersPosts) => {
        const formattedPosts = getPostsByUsers(usersPosts);
        res.json(formattedPosts);
      })
      .catch((err) => res.json({
        error: err.message
      }));
  });
  // register route 
router.post('/', async (req, res, next) => {
  console.log("HEEEEE--E-EEEE-EEEE-EYYYYY")
    const user = req.body;
    console.log(req.body);
    user.password = bcrypt.hashSync(user.password, salt);
    console.log(await getUserByEmail(user.email));
    const alreadyExists = await getUserByEmail(user.email);
    console.log(typeof alreadyExists, "alreaDYYYY")
    if (typeof alreadyExists !== 'undefined') {
      res.status(403).send('noppeeee')
    } else {
      addUser(user.full_name, user.email, user.password)
      .then((user) => {
        console.log(user, 'user added...')
        if (!user) {
          res.send({error: 'error'});
          return;
        }
        res.json(user);
        // res.send(String(user[0].full_name))
    }).catch((err) => {
      console.log(err)
    })
    }
});
// this is the database route 
  router.put('/:id', async(req, res, next) => {
    let {
      full_name, 
      email, 
      password, 
      student, 
      mentor, 
      silent_buddy,
      location,
      description,
      img,
      subject,
      language
    } = req.body;
    const { id } = req.params;
    console.log(`req body: ${JSON.stringify(req.body)}`)
    password = bcrypt.hashSync(password, salt);
    getSpecificUser(id)
        .then(user => {
          console.log("user from get specific user in put request",user);
          if (!user) {
            res.json({
              msg: 'Sorry,user does not exists'
            }); 
            return;
          } 
          return editUser({
            id,
            full_name, 
            email, 
            password, 
            student, 
            mentor, 
            silent_buddy,
            location,
            description,
            img,
            subject,
            language
          })
        })
        .then(updatedUser => {
          console.log("UPDATED FOR SURE", updatedUser)
          res.json(updatedUser);
        })
        .catch(err => res.json({
          error: err.message
        }));
    });
// here is messaging route... need to create db query. build on index.js
  router.get('/:id/chats', (req, res) => {
    const { id } = req.params;
    getChatsByUser(id)
      .then((user) => res.json(user))
      .catch((err) => res.json({
        error: err.message
      }));
  });
  return router;
}