const { customersController } = require("../controllers");

const customersRouter = require("express").Router();

customersRouter.get("/", customersController.getCustomers);

module.exports = customersRouter;
