const express = require('express');
const apiController = require('../controllers/apiController');
const controllerHandler = require('../controllers/helpers/controllerHandler');
const validatorFactory = require('../validation/validator');
const { get: getCadexSchema, post: postCadexSchema } = require('../validation/schemas');
const ApiError = require('../errors/ApiError');
const errorHandler = require('../controllers/helpers/errorHandler');

const router = express.Router();

/**
 * Expected object with custom chunks of phrase
 * @typedef {object} cadex
 * @property {string} name - The name
 * @property {string} adjective - The adjective
 * @property {string} verb - The verb
 * @property {string} complement - The complement
 * @property {string} cadex - The complete cadex
 */

/**
 * A cadex error
 * @typedef {object} ValidationError
 * @property {string} status - the request status
 * @property {string} message - the error reason
 */

/**
 * GET /cadex
 * @summary returns a complete cadex object
 * @param {string} name.query - a specific name for our cadex
 * @param {string} adjective.query - a specific adjective for our cadex
 * @param {string} verb.query - a specific verb for our cadex
 * @param {string} complement.query - a specific complement for our cadex
 * @return {cadex} 200 - success response
 * @return {ValidationError} 418 - validation error response
 */
router.get('/', validatorFactory(getCadexSchema, 'query'), controllerHandler(apiController.getCadex));

/**
 * POST /cadex
 * @summary add new parts to cadex database and returns a complete cadex object
 * @param {cadex} request.body - an object with new cadex parts
 * @return {cadex} 200 - success response
 * @return {ValidationError} 418 - validation error response
 */
router.post('/', validatorFactory(postCadexSchema, 'body'), controllerHandler(apiController.postCadex));

router.use(() => {
  throw new ApiError('Resource not found', 404);
});

router.use(errorHandler);

module.exports = router;
