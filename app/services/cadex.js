const debug = require('debug')('cadex:service');
const dataMapper = require('../datamapper');
const ApiError = require('../errors/ApiError');

const cadex = {
  async generate() {
    debug('generating a new cadex');
    const cadexObject = await dataMapper.getCadex();
    // on ajoute une dernière propriété 'toString' à notre objet.
    // on souhaite qu'elle ne soit ni énumérable, ni modifiable
    Object.defineProperty(cadexObject, 'toString', {
      enumerable: false,
      writable: false,
      value() {
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        // crée 2 variables, toString et parts. toString, vaut la propriété toString,
        // parts vaut un objet contenant toutes les autres propriétés
        const { toString, ...parts } = this;
        return Object.values(parts).join(' ');
      },
    });
    return cadexObject;
  },

  async updateData(updateObj) {
    const forbiddenVerbs = ['chie', 'emmerde'];
    if (forbiddenVerbs.includes(updateObj.verb)) {
      throw new ApiError('Ce mot est interdit', 418);
    }
    await dataMapper.addCadexParts(updateObj);
  },
};

module.exports = cadex;
