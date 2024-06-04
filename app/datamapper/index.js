const debug = require('debug')('cadex:datamapper');
const client = require('./client');

const dataMapper = {
  // eslint-disable-next-line consistent-return
  async getCadex() {
    const preparedQuery = {
      text: `SELECT
            (SELECT "content" AS "name" FROM "name" ORDER BY RANDOM() LIMIT 1),
            (SELECT "content" AS "adjective" FROM "adjective" ORDER BY RANDOM() LIMIT 1),
            (SELECT "content" AS "verb" FROM "verb" ORDER BY RANDOM() LIMIT 1),
            (SELECT "content" AS "complement" FROM "complement" ORDER BY RANDOM() LIMIT 1)`,
    };
    const results = await client.query(preparedQuery);
    return results.rows[0];
  },

  async addCadexParts(updateObj) {
    debug('addCadexParts');

    const promises = [];
    Object.entries(updateObj).forEach(([key, value]) => {
      const preparedQuery = {
        text: `INSERT INTO "${key}" ("content") VALUES($1)`,
        values: [value],
      };
      promises.push(client.query(preparedQuery));
    });
    await Promise.all(promises);
  },
};

module.exports = dataMapper;
