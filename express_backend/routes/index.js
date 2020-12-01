const express = require('express');
const router = express.Router();
const db = require('../db');
const { getUserByEmail , findUser, editUser} = require('../models/index.js')(db);

const bcrypt = require('bcrypt');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post( '/search' , function (req, res) {
  console.log("i am search router get",req.body)
       const {name} = req.body;
       findUser(name)
       .then(result => {
         res.status(200).json(result)
       })
   
 })
 // get chats that a user is connected to 

 
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password)
  console.log(getUserByEmail(email))
  getUserByEmail(email)
    .then(result => {
      console.log(result)
        if (bcrypt.compareSync(password, result.password)) {
          console.log('passwords match')
          res.status(200).json(result)
        } else {
          console.log('passwords dont match')
          res.status(403).send('nope')
      }
    })
    .catch(e => console.log(e));
});
module.exports = router;