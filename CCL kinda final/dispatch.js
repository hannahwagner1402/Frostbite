//imported function (we used this with martin grubinger) that randomizes numbers
let randomNumberBetween = (minRandomNumber, maxRandomNumber) => {
  return Math.floor(
    Math.random() * (maxRandomNumber - minRandomNumber + 1) + minRandomNumber
  );
};
//for moving enemys
const range = (min, max) =>
  [Array(max - min + 1).keys()].map((i) => i + min);

//defining timeframe where drops& enemys will drop in
class RandomDispatcher {
  constructor(callback, options = { min: 0, max: 8000 }) {
    this.options = options;
    this.callback = callback;
    this.run();
  }

  run() {

    // calculate a random number between min and max 
    //wait= time between min & max 
    let wait = randomNumberBetween(this.options.min, this.options.max);

    // clear previous timeout
    if (this.timeout) window.clearTimeout(this.timeout);

    this.timeout = window.setTimeout(() => {
      // call the callback
      this.callback();
    }, wait);
  }
}

export { RandomDispatcher, randomNumberBetween, range };
