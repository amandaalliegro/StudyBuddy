const express = require('express');
const router = express.Router();
const {getPostsByUsers} = require('../helpers/dataHelpers');


module.exports = ({ getUsers, findUserByEmail, addUser,
  getUsersPosts, getSpecificUser }) => {

  /* GET users listing. */
  // name space defined in app.js /api/users
  // axios in app.js on client 
  router.get('/', function (req, res) {
    getUsers()
      .then(users => res.json(users))
      .catch(err => res.json({ msg: err.message }))
  });

  router.get('/:id', function (req, res) {
    getSpecificUser(req.params.id).then(response => {
      console.log("query ran")
      console.log(response.rows)
      res.json({user:response.rows})

    })
    
    // res.send("ok")

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

  router.post('/', (req, res) => {

    const {
      first_name,
      last_name,
      email,
      password
    } = req.body;

    getUserByEmail(email)
      .then(user => {

        if (user) {
          res.json({
            msg: 'Sorry, a user account with this email already exists'
          });
        } else {
          return addUser(first_name, last_name, email, password)
        }

      })
      .then(newUser => res.json(newUser))
      .catch(err => res.json({
        error: err.message
      }));

  })


  return router;
}
