const { ErrorHandler } = require('../helpers/error')

exports.errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;
  console.log(err)
  res.status(statusCode || 501).json({
    status: "error",
    statusCode,
    message
  });
}

exports.invalidAPI = ('*', (req, res, next) => {
  next(new ErrorHandler(404, 'Invalid API', 'Error:may be Controller file not included in server.js file'))
})