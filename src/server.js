const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const { resError } = require("./utils");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"));

// cors defined
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// acces to main router
server.use(router);

server.use((err, req, res, next) => {
  const { status, message } = err;
  resError(res, status, message);
});

module.exports = {
  server,
};