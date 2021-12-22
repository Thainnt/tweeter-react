const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries");

// GET /api/users/
// tester
router.get("/users", function (req, res) {
  userQueries
    .getAllUsers()
    .then((response) => {
      res.json(response.rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/tweets", function (req, res) {
  userQueries
    .getAllTweets()
    .then((response) => {
      res.json( response.rows );
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


//route to get user login info
router.post("/login", (req, res) => {
  const user = req.body;

  userQueries.getUserByEmail(user.email).then((response) => {
    //check if email exists
    if (!response.rows[0]) {
      return res
        .status(404)
        .send({ status: "Error", message: "Can not find email" });
    } else {
      req.session.user_id = response.rows[0].id;
      // req.session.user_name = response.rows[0].name;
      // have this redirect to appropriate page
      // res.cookie["username"] = response.rows[0].name;
      // res.redirect("/");
      // delete user.password;
      const userFromDb = response.rows[0];
      res.send({ ...userFromDb });
    }
  });
});

//route to get user register info
router.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const user = {
    name,
    email,
    password,
    is_admin: false,
  };

  if (email === "" || password === "") {
    return res.status(400).send("Please fill out a valid email and password");
  }
  userQueries
    .addUser(user)
    .then((response) => {
      console.log(response);
      userQueries.getUserByEmail(user.email).then((response) => {
        req.session.user_id = response.rows[0].id;
        const userFromDb = response.rows[0];
        res.send({ ...userFromDb });
      });
    })
    .catch((error) => {
      console.log("failed to added user", error);
      res.status(400).send("can not add user");
    });
});

//logout route
router.post("/logout", (req, res) => {
  req.session.user_id = null;
  res.json("Successfully logged out!");
});

module.exports = router;
