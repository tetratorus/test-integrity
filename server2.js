const express = require('express')
const app = express()
const port = 3001

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static('public2'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
