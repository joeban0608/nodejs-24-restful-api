const express = require("express");
const feedRoutes = require("./routes/feed");
const bodyParser = require("body-parser");
const app = express();

// constant
const PORT = 8080;

// app.use(bodyParser.urlencoded()) // x-www-form-urlencoded  <form>
app.use(bodyParser.json()); // application/json

// set Header middleware, 允许跨域请求
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.listen(PORT);
