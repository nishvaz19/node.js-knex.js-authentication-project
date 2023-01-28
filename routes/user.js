const express = require("express");
const router = express.Router();
const database = require("../db/db.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/users", (request, response) => {
  const { user } = request.body;
  bcrypt.hash(user.password, 12).then((hashed_password) => {
    return database("users")
      .insert({
        username: user.username,
        password_hash: hashed_password,
      })
      .returning("*")
      .then((users) => {
        const user = users[0];
        response.json({ user });
      })
      .catch((err) => {
        response.json({ error: err.message });
      });
  });
});

router.post("/login", (req, res) => {
  const { user } = request.body;
  database("users")
    .where({ username: user.username })
    .first()
    .then((retrievedUser) => {
      if (!retrievedUser) throw new Error("User Not Found");
      return Promise.all([
        bcrypt.compare(user.password, retrievedUser.password_hash),
        Promise.resolve(retrievedUser),
      ]).then((results) => {
        const areSamePasswords = results[0];
        if (!areSamePasswords) throw new Error("wrong password!");
        const user = results[1];
        const payload = { username: user.username };
        const secret = "SECRET";
        jwt
          .sign(payload, secret, (error, token) => {
            if (error) throw new Error(error);
            response.json({ token, user });
          })
          .catch((error) => {
            response.json({ message: error.message });
          });
      });
    });
});

module.exports = router;
