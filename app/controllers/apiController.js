const debug = require('debug')('cadex:controller');
const cadexService = require('../services/cadex');
const logger = require('../utils/logger');

const apiController = {

  async getCadex(request, response) {
    debug('getCadex', request.query);
    logger.log('info', 'apiController.getCadex');
    const cadexObject = await cadexService.generate();
    Object.assign(cadexObject, request.query);
    cadexObject.cadex = `${cadexObject}`;
    response.json(cadexObject);
  },

  async postCadex(request, response) {
    debug('updateCadex', request.body);
    logger.log('info', 'apiController.postCadex');
    await cadexService.updateData(request.body);
    const cadexObject = await cadexService.generate();
    Object.assign(cadexObject, request.body);
    cadexObject.cadex = `${cadexObject}`;
    response.json(cadexObject);
  },
};

module.exports = apiController;
