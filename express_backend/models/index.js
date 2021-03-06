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
  const getChatsByUser = id => {
    const query = {
      text: `
      SELECT id AS contact_id, photo_url AS contact_photo, CONCAT(first_name, ' ', last_name) AS contact_name, messages
      FROM chat_messages
      JOIN users ON id = participant_1 OR  id = participant_2
      WHERE (participant_1 = $1 OR participant_2 = $1) AND id <> $1
      `,
      values: [id]
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch((err) => err);
  }

  const getSpecificUser = id => {
    const query = {
      text: 'SELECT * FROM users where id = $1',
      values: [id]
    };
    console.log("get specificUser is running")
    return db.query(query)
    // .then(result => result.rows[0])
    // .catch((err) => console.log(err));
  };

  const getUserByEmail = email => {

    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email]
    }
    console.log(email)
    console.log(" yolo")
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
// for search bar
  function findUser(name){
    return db.query('SELECT * FROM users WHERE full_name  LIKE $1 OR subject LIKE $1 or description LIKE $1', [`%${name.trim()}%`] )
    .then((res) => {
      console.log(res.rows)
      return res.rows;
    })
    .catch((err) => {
       return err.message;
    })
  }

  const editUser = userObject => {
    // a query will only be build and run if an user id was provided and the passed object has more than the id key
    if (userObject && Object.keys(userObject).length > 1) {
      // all the accepted fields in our database
      const userFields = ['full_name', 'email', 'password', 'student', 'mentor', 'silent_buddy','description','subject','language','location','img'];
      
      // the sql query and the values array should be build dynamically
      let text = `UPDATE users \nSET `;
      const values = [userObject.id]; 
      for (const field of userFields) {
        if (userObject[field] !== '') {
          values.push(userObject[field]);
          text += `${field} = $${values.length},\n`;
        }
      }
      text = text.slice(0, -2) + "\nWHERE users.id = $1 \nRETURNING *;";
      console.log(`query: ${text}`)
      return db.query(text, values)
        .then(result => {
          // if (result.rows[0]) {
            console.log("THIS IS RESULT LINE 79", result.rows[0])
              return result.rows[0];
        })
        .catch(err => {
          console.log(`err on edit: ${err}`)
          return err
        });
      }
    throw 'It seems that the user id is missing or there are no fields to update';
  };


  return {
    findAccount,
    getUsers,
    getUserByEmail,
    addUser,
    getUsersPosts,
    getSpecificUser,
    findUser,
    editUser
  };
};