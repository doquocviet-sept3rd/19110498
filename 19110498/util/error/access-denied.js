const AppError = require('./app-error');

module.exports = class AccessDenied extends AppError {
  constructor(message) {
    super(message, 403);
  }
};