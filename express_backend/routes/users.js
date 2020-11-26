const express = require('express');
const router = express.Router();
const {getPostsByUsers} = require('../helpers/dataHelpers');


module.exports = ({ getUsers, getUserByEmail, addUser,
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
router.post('/', async (req, res, next) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, salt);
    const alreadyExists = await findAccount(db, user.email).then((users) => {
      return users
    })
    if (alreadyExists.length > 0) {
      res.status(403).send('noppeeee')
    } else {
      addUser(db, user)
      .then((user) => {
        console.log('user added...')
        if (!user) {
          res.send({error: 'error'});
          return;
        }
        res.send(String(user[0].id))
    }).catch((err) => {
      console.log(err)
    })
    }
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

