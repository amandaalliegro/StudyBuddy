const getPostsByUsers = (usersPosts) => {
  const postsByUsers = {};
  

  for (let post of usersPosts) {
    if (!postsByUsers[post.user_id]) {
      postsByUsers[post.user_id] = {
        userId: post.user_id,
        firstName: post.first_name,
        lastName: post.last_name,
        email: post.email,
        posts: [],
      };
    }

    postsByUsers[post.user_id].posts.push({
      title: post.title,
      content: post.content,
    });

  }

  return Object.values(postsByUsers);



};
function findAccount(db, email) {
  return db.query('SELECT * FROM users WHERE email=$1', [email])
  .then((res) => {
    return res.rows
  })
  .catch((err) => {
    console.log(err)
  })
}

function findUser(db, name){
  return db.query('SELECT * FROM users WHERE full_name LIKE $1;', [`%${name}$%`])
  .catch((err) => {
    console.error(err.message);
  })
}



function addUser (db, user) {
  console.log('adding..')
  const dataArray = [user.name, user.email, user.password];
  return db.query(`
  INSERT INTO users (name, email, password)
  VALUES($1, $2, $3)
  RETURNING *;
`, dataArray).then((res) => {
    return res.rows
  }).catch((err) => {
    console.log(err)
  })
}
module.exports = {
  getPostsByUsers,
  
};
