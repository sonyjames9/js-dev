const express = require("express")
const app = express()

app.get("/test", function (req, res) {
  res.json({"msg": "test"})
})

app.get("/health-checkup", function (req, res) {
  var query = require('url').parse(req.url,true).query;
  
  const username = req.query.username
  const password = req.query.password
  const kidneyId = req.query.kidneyId
  console.log(kidneyId);
  console.log(typeof(kidneyId));
  
  if ((username != "sony" || password != "pass")) {
    console.log(username)
    console.log(password)
    res.status(400)
      .sethHader("Content-Type", "application/json")
      .json({ "msg": "Username or password is not right" })
    return
  }
  if (kidneyId != "1" || kidneyId != "2") {
    res.status(400).json({"msg": "Incorrect inputs"})
  }
  res.json({
    msg: "Your kidney is fine"
  })
})

app.listen(3000)