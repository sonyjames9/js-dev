const express = require("express")
const app = express()

app.use(express.json())
app.get("/test", function (req, res) {
  res.json({"msg": "test"})
})

app.get("/health-checkup", function (req, res) {
  var query = require('url').parse(req.url,true).query;
  
  const username = req.query.username
  const password = req.query.password
  const kidneyId = parseInt(req.query.kidneyId)
  
  if ((username != "sony" || password != "pass")) {
    res.status(400)
    .setHeader("Content-Type", "application/json")
    .json({ "msg": "Username or password is not right" })
    return
  }

  if (!([1,2].includes(kidneyId))) {
    console.log(kidneyId);
    console.log(typeof(kidneyId));
    res.status(400).json({ "msg": "Incorrect inputs" })
    return
  }
  res.status(200).json({
    msg: "Your kidney is fine"
  })
})

app.listen(3000)