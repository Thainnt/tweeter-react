const express = require("express");
const router = express.Router();
const queries = require("../db/queries");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

// GET /api/users/
// tester
router.get("/users", function (req, res) {
  queries
    .getAllUsers()
    .then((response) => {
      res.json(response.rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/tweets", function (req, res) {
  queries
    .getAllTweets()
    .then((response) => {
      res.json( response.rows );
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/tweets", (req, res) => {
  const tweet = {
    content: req.body.content,
    user_id: req.body.user_id
  }
queries
  .addTweet(tweet)
  .then(data => {
    console.log('success add: ', data);
    res.send({status: 200, message: "add new tweet"});
  })
  .catch(err => {
    console.log(err);
  });
});

//route to get user register info
router.post("/register", (req, res) => {
  const name = req.body.name;
  const handle = req.body.handle;
  const avatar = req.body.avatar;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, salt);
  const user = {
    name,
    handle,
    avatar,
    email,
    password,
    is_admin: false,
  };

  if (email === "" || password === "") {
    return res.status(400).send("Please fill out a valid email and password");
  }
  queries
    .addUser(user)
    .then((response) => {
      console.log(response);
      queries.getUserByEmail(user.email).then((response) => {
        req.session.user_id = response.rows[0].id;
        const userFromDb = response.rows[0];
        console.log('returnuser:',userFromDb);
        res.send({ ...userFromDb });
      });
    })
    .catch((error) => {
      console.log("failed to added user", error);
      res.status(400).send("can not add user");
    });
});

//route to get user login info
router.post("/login", (req, res) => {
  const user = req.body;

  queries.getUserByEmail(user.email).then((response) => {
    //check if email exists
    if (!response.rows[0]) {
      return res
        .status(404)
        .send({ status: "Error", message: "Can not find email" });
    } else {
      if (bcrypt.compareSync(user.password, response.rows[0].password)) {
        req.session.user_id = response.rows[0].id;
        const userFromDb = response.rows[0];
        return res.send({ ...userFromDb });
      }
      res.send({ status: "Error", message: "Incorrect email/password" });
    }
  });
});

//logout route
router.post("/logout", (req, res) => {
  req.session.user_id = null;
  res.json("Successfully logged out!");
});

module.exports = router;