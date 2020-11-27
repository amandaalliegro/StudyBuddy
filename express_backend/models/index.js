module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: 'SELECT * FROM users',
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getSpecificUser = id => {
    const query = {
      text: 'SELECT * FROM users where id = $1',
      values: [id]
    };
    console.log("get specificUser is running")
    return db.query(query)
  };

  const getUserByEmail = email => {

    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email]
    }
    console.log(email)
    console.log("fucking yolo")
    return db
      .query(query)
      .then(result => result.rows[0])
      .catch((err) => console.log(err));
  }

  const addUser = (full_name, email, password) => {
    const query = {
      text: `INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING *`,
      values: [full_name, email, password]
    }

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  }

  const getUsersPosts = () => {
    const query = {
      text: `SELECT users.id as user_id, full_name, email, posts.id as post_id, title, content
      FROM users
      INNER JOIN posts
      ON users.id = posts.user_id`
    }

    return db.query(query)
      .then(result => result.rows)
      .catch(err => err);

  }
  function findAccount(db, email) {
    return db.query('SELECT * FROM users WHERE email=$1', [email]).then((res) => {
      return res.rows
    }).catch((err) => {
      console.log(err)
    })
  }

  return {
    findAccount,
    getUsers,
    getUserByEmail,
    addUser,
    getUsersPosts,
    getSpecificUser


  };
};