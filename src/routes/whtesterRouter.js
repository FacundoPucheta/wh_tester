const { whtesterController } = require("../controllers");
const whTesterRouter = require("express").Router();

whTesterRouter.post("/", whtesterController.getWhTester);

module.exports = whTesterRouter;
