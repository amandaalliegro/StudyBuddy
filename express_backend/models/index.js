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
    return db
      .query(query)
      .then(result =>result.rows[0])
      .catch((err) => console.log(err));
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
  const editUser = userObject => {
    console.log("IM EDIT USER FUNCTION");
    // a query will only be build and run if an user id was provided and the passed object has more than the id key
    //if (userObject && Object.keys(userObject).length > 1) {
      console.log("IM USER OBJECT FROM THE HELPER FUNCTION", userObject)

      // all the accepted fields in our database
      const userFields = ['id','full_name', 'email', 'password', 'student', 'mentor', 'description', 'silent_buddy'];
      console.log("THIS IS USER FIELDS", userFields)
      // the sql query and the values array should be build dynamically
      let text = `UPDATE users \nSET `;
      const values = [userObject];
      console.log("this is userObject line 62", userObject["full_name"])
      for (const field of userFields) {
        if (userObject[field]) {
          values.push(userObject[field]);

          text += `${field} = $${values.length},\n`;
          console.log("THIS IS TEXT LINE 68", text)
        }

      }
      console.log("THIS IS THE NEW USER OBJECT", userObject)
      text = text.slice(0, -2) + "\nWHERE users.id = $1 \nRETURNING *;";

      return db.query(text, values)
        .then(result => {
          console.log("THIS IS RESULT", result)
          // if (result.rows[0]) {
          //   console.log("THIS IS RESULT LINE 79", result.rows[0])
              return result.rows[0];
            
          // }
          // throw 'The user id does not exist';
        })
        .catch(err => err);
    

    throw 'It seems that the user id is missing or there are no fields to update';
  };

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
    getSpecificUser,
    editUser
  };
};