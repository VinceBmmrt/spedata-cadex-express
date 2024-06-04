const random = {
  /**
   * generate a random integer between a min and max value
   * @param {number} min - min random value
   * @param {number} max - max random value
   * @returns a random number between a min and max value
   */
  getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getRandomArrayValue(arr) {
    return arr[random.getRandomInteger(0, arr.length - 1)];
  },
};

module.exports = random;
