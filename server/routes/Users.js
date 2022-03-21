const express = require("express");
const router = express.Router();
const { Users } = require( "../models" );
const bcrypt = require("bcryptjs");
const uid = require("../utils/uid");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", async (req, res) => {
  const {id, username, password } = req.body;
  bcrypt.hash(password, 10)
  .then((hash) => {
    Users.create({
      id: id || uid(),
      username: username,
      password: hash,
    });
    res.status(200).json("SUCCESS");
  })
  .catch( err => {
    console.error( err )
    res.status(404).json({error: "Registration error"});
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users?.findOne({ where: { username: username } });

  if (!user) res.status(404).json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password)
  .then(async (match) => {
    if (!match) res.status(409).json({ error: "Wrong Username And Password Combination" });

    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantsecret"
    );
    res.status(200).json({ token: accessToken, username: username, id: user.id });
  })
  .catch(err => res.status(404).json({error: "Username Or Password Incorrect"}));
} );

router.delete("/logout", validateToken, (req, res) => {
  res.json("LOGOUT");
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;