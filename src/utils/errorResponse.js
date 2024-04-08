const errResponse = (res, status, message) => {
  res.status(status).send(message);
};

module.exports = errResponse;
  