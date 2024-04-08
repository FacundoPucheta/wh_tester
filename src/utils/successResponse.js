const response = (res, status, data) => {
  res.status(status).send(data)
};

module.exports = response;
