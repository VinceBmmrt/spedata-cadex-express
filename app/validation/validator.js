const debug = require('debug')('cadex:validation');
const ApiError = require('../errors/ApiError');

const validator = {
/*
  async validateGetCadex(request, response, next) {
    try {
      await getCadexSchema.validateAsync(request.query);
      next();
    } catch (err) {
      debug(err);
      response.status(418).json({ status: 'error', message: err.details[0].message });
    }
  },
  async validatePostCadex(request, response, next) {
    try {
      await postCadexSchema.validateAsync(request.body);
      next();
    } catch (err) {
      debug(err);
      response.status(418).json({ status: 'error', message: err.details[0].message });
    }
  },
};
*/

  /**
 * generate a validation function
 * @param {Object} schema
 * @param {"query"|"params"|"body"} source
 * @returns a validation function for the provided schema and data source
 */
  validatorFactory(schema, source) {
    return async (request, response, next) => {
      try {
        await schema.validateAsync(request[source]);
        next();
      } catch (err) {
        debug(err);
        next(new ApiError(err.message, 418));
      }
    };
  },
};

module.exports = validator.validatorFactory;
