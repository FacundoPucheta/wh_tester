const whTesterRouter = require("./whtesterRouter");

const router = require("express").Router();

router.use("/whtester", whTesterRouter);

module.exports = router;
