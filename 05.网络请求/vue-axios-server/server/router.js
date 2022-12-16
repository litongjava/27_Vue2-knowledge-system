const express = require("express");
const router = express.Router();
const url = require("url");
const list = require("./data/list");

router.get("/list", (req, res) => {
  const page = url.parse(req.url, true).query.page;
  res.send({
    status: 200,
    result: list,
    page
  })
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.send({
    status: 200,
    username,
    password
  })
});


module.exports = router;
