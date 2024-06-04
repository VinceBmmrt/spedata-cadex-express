const cadexService = require('./cadex');
const data = require('../../data/parts.json');

const cadex = cadexService.generate();

describe('cadex.generate should', () => {
  it('return a object', () => {
    expect(typeof cadex).toBe('object');
  });
  it('have a name, an adjective, a verb and a complement property', () => {
    /* eslint-disable no-prototype-builtins */
    expect(cadex.hasOwnProperty('name')).toBe(true);
    expect(cadex.hasOwnProperty('adjective')).toBe(true);
    expect(cadex.hasOwnProperty('verb')).toBe(true);
    expect(cadex.hasOwnProperty('complement')).toBe(true);
    /* eslint-enable no-prototype-builtins */
  });
  it('have values coming from data arrays', () => {
    expect(data.names.includes(cadex.name)).toBe(true);
    expect(data.adjectives.includes(cadex.adjective)).toBe(true);
    expect(data.verbs.includes(cadex.verb)).toBe(true);
    expect(data.complements.includes(cadex.complement)).toBe(true);
  });
  it('return a string formed by the object properties when converted to string type', () => {
    expect(`${cadex}` === `${cadex.name} ${cadex.adjective} ${cadex.verb} ${cadex.complement}`).toBe(true);
  });
});

describe('GET /cadex should', () => {
  it('have a name property', async () => {
    const result = await fetch('http://localhost:4000/cadex');
    const obj = await result.json();
    expect(obj.name).toBeTruthy();
  });
});
