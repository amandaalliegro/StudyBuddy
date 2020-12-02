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

router.post('/room_chat', (req, res) => {
  console.log("post to room chat", req.body, "post new room", postNewRoom)
  postNewRoom(req.body.roomName, req.body.user_id, "1").then(result => {
    console.log("server", result) 
    res.send(result)
  })


})

// create express router.get(/room_chat) that calls db function

router.get('/room_chat', (req, res) => {
  console.log(req.headers)
  fetchRooms(req.headers.user_id)
  .then(result => {
    console.log(res)
    res.send(result.rows)
  })
})
module.exports = router;