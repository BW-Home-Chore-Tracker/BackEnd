const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const userRouter = require("../users/userRouter.js");
const choresRouter = require("../chores/choresRouter.js");
const childrenRouter = require("../children/childrenRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", userRouter);
server.use("api/chores", choresRouter);
server.use("api/children", childrenRouter);

server.get("/", (req, res) => {
  res.send("Server running");
});

module.exports = server;