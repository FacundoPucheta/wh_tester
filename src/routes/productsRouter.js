const { productsController } = require("../controllers");

const productsRouter = require("express").Router();

productsRouter.get("/", productsController.getProducts);

module.exports = productsRouter;
