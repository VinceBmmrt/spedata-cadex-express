const debug = require('debug')('cadex:errorHandler');
const ApiError = require('../../errors/ApiError');
const logger = require('../../utils/logger');

// https://expressjs.com/en/guide/error-handling.html
// eslint-disable-next-line no-unused-vars
const errorHandler = (error, _, response, next) => {
  debug('errorHandler', error);
  logger.log('error', error.message);
  if (error instanceof ApiError) {
    if (process.env.NODE_ENV === 'development') {
      return response.status(error.status).json({ status: 'error', message: error.message, stack: error.stack });
    }
    return response.status(error.status).json({ status: 'error', message: error.message });
  }
  if (process.env.NODE_ENV === 'development') {
    return response.status(500).json({ status: 'error', message: error.message, stack: error.stack });
  }
  return response.status(500).json({ status: 'error', message: 'Internal server error' });
};

module.exports = errorHandler;
