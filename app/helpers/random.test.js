const random = require('./random');

describe('random.getRandomInteger should', () => {
  it('return a number', () => {
    expect(typeof random.getRandomInteger(0, 10)).toBe('number');
  });
  it('return a value in the defined range', () => {
    const value = random.getRandomInteger(0, 10);
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(10);
  });
});

describe('random.getRandomArrayValue should', () => {
  const mock = ['hello', 12, true, 'bob'];
  it('return a random value from an array', () => {
    expect(mock.includes(random.getRandomArrayValue(mock))).toBe(true);
  });
});
