// 🌟 8.1.2. Function Expressions
// This function expression defines a function that squares its argument.
// Note that we assign it to a variable

//전통적인 함수 정의를 하지 않는 이상 hoisting이 발생하지 않음

const square = function (x) {
  return x * x;
};
// Function expressions can include names, which is useful for recursion.
const f = function fact(x) {
  if (x <= 1) return 1;
  else return x * fact(x - 1);
};
// Function expressions can also be used as arguments to other functions:
[3, 2, 1].sort(function (a, b) {
  return a - b;
});
// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function (x) {
  return x * x;
})(10);
