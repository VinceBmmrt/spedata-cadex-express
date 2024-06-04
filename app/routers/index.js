const debug = require('debug')('cadex:router');
const express = require('express');
const apiRouter = require('./apiRouter');
const websiteRouter = require('./websiteRouter');

const router = express.Router();

debug('mise en place du routeur de l\'api');
router.use('/cadex', apiRouter);
debug('mise en place du routeur du front');
router.use('/', websiteRouter);

/*
router.route('/')
  .get('/cadex', mainController.getCadex)
  .post('/cadex', mainController.updateCadex);
*/

module.exports = router;
