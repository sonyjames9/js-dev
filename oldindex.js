const express = require("express");
const port = 3000
const bodyparser = require("body-parser")
const app = express();
var jsonparser = bodyparser.json()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
// app.use(jsonparser)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', function (req, res) {
  res.send('Hello World')
  console.log(req.body)
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
})