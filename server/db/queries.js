const db = require("./db");

const getAllUsers = () => {
  return db.query(`SELECT users.id, users.name, users.handle, users.avatar FROM users;`);
};

const getAllTweets = () => {
  return db.query(`SELECT * FROM tweets;`)
};

const addUser = (user) => {
  return db
    .query(
      `INSERT INTO users(name, handle, avatar, email, password, is_admin)
                    VALUES($1,$2,$3,$4,$5,$6) RETURNING *;`,
      [`${user.name}`, `${user.handle}`, `${user.avatar}`, `${user.email}`, `${user.password}`, `${user.is_admin}`]
    )
    .then((response) => {
      if (response.rows.length) {
        return response.rows[0];
      }
    });
};

const addTweet = (tweet) => {
  return db
    .query(
      `INSERT INTO tweets(content, user_id)
                    VALUES($1,$2) RETURNING *;`,
      [`${tweet.content}`, `${tweet.user_id}`]
    )
    .then((response) => {
      if (response.rows.length) {
        return response.rows[0];
      }
    });
};

const getUserByEmail = (email) => {
  return db.query(`SELECT * FROM users WHERE email=$1;`, [`${email}`]);
};

const getUserById = (id) => {
  return db.query(`SELECT * FROM users WHERE id=$1;`, [`${id}`]);
};

module.exports = {
  addUser,
  addTweet,
  getUserByEmail,
  getUserById,
  getAllUsers,
  getAllTweets
};
