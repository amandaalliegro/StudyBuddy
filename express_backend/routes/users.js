const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
let salt = bcrypt.genSaltSync(10);
// const { getPostsByUsers, findAccount, addUser } = require('../helpers/dataHelpers');

module.exports = ({ editUser, getUsers, getUserByEmail, addUser,
  getUsersPosts, getSpecificUser }) => {

  /* GET users listing. */
  // name space defined in app.js /api/users
  // axios in app.js on client 
  router.get('/', function (req, res) {
   
    getUsers()
      .then(users => res.json(users))
      .catch(err => res.json({ msg: err.message }))
  });

  // router.get('/:id', function (req, res) {
  //   getSpecificUser(req.params.id).then(response => {
  //     console.log("query ran")
  //     console.log(response.rows)
  //     res.json({user:response.rows})

  //   })
    
  //   // res.send("ok")

  // });

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
    })

router.put('/:id', async(req, res, next) => {

  let {
    full_name, 
    email, 
    password, 
    student, 
    mentor, 
    silent_buddy, 
    description
  } = req.body;
  

  const { id } = req.params;

  password = bcrypt.hashSync(password, salt);
  getSpecificUser(id)
      .then(user => {
        console.log(user);

        if (!user) {
          res.json({
            msg: 'Sorry,user does not exists'
          }); 
          return;
        } 

        return editUser({
          full_name, 
          email, 
          password, 
          student, 
          mentor, 
          silent_buddy, 
          description
        })
        
      })
      .then(updatedUser => {
        console.log(updatedUser)
        res.json(updatedUser);
    
      

      })
      .catch(err => res.json({
        error: err.message
      }));
  });
  


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

