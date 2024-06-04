require('dotenv').config();
const debug = require('debug')('cadex:server');
const path = require('node:path');
const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const morganMW = require('./app/utils/morgan');
const router = require('./app/routers');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
const PORT = process.env.PORT ?? 3000;

const options = {
  info: {
    version: '1.0.0',
    title: 'Cadex Generator',
    license: {
      name: 'MIT',
    },
  },
  // Base directory which we use to locate your JSDOC files
  baseDir: path.join(__dirname, '/app/routers'),
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.js',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/api-docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
};

const app = express();
expressJSDocSwagger(app)(options);

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(morganMW);

/*
app.use((request) => {
  debug(`${request.method} ${request.path} ${new Date().toISOString()}`);
});
*/

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => debug(`server ready http://localhost:${PORT}`));
