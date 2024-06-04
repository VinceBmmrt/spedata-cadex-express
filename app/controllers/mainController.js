const debug = require('debug')('cadex:controller');

const mainController = {
  getHome(_, response) {
    debug('get homepage');
    response.render('home');
  },
};

module.exports = mainController;
