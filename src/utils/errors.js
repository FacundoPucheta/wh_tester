class ClientError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.status = status;
    
  }
}
class ServerError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.status = status;
    
  }
}

module.exports = {
  ClientError,
  ServerError,
};
