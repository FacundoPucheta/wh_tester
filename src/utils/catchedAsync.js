// This function it's for a 'cleaner' code. This will return the executed fn and catch the error, and pass the error to express to be handled

const catchedAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res).catch((err) => next(err));
};
};

module.exports = catchedAsync;
