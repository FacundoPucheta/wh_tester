const { resSuccess, catchedAsync } = require("../utils");
const { getwhService } = require("../services");

const getWhInfo = async (req, res) => {
  const json = req.body;
  const info = await getwhService.getWhInfo(json);

  resSuccess(res, 200, info);
};

module.exports = {
  getWhTester: catchedAsync(getWhInfo),
};
