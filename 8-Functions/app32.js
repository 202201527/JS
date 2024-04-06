// 🌟 8.8 Functional Programming
// 8.8.1 Processing Arrays with Functions

const map = function (a, ...args) {
  return a.map(...args); //배열 반환
};
const reduce = function (a, ...args) {
  return a.reduce(...args); // number 반환
};

const sum = (x, y) => x + y;
const square = (x) => x * x;

let data = [1, 1, 3, 5, 5];
let mean = reduce(data, sum) / data.length;
let deviations = map(data, (x) => x - mean);
let stddev = Math.sqrt(
  reduce(map(deviations, square), sum) / (data.length - 1)
);
stddev; // => 2
