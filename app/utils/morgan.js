const morgan = require('morgan');
const logger = require('./logger');

const stream = {
  write: (message) => {
    logger.log('http', message);
  },
};

const morganMW = morgan('common', { stream });

module.exports = morganMW;
