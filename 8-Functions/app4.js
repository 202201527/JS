// 🌟 8.1.4. Nested Functions

console.log(hypotenuse(3,4)); //hoisting

function hypotenuse(a, b) {
  function square(x) {  //inner function은 접근 불가
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}

let z = 10;
let s = hypotenuse2(10,20);   // s = squre()
function hypotenuse2(a, b) {
  let z = 5;  //hypotenuse2 는 z = 10이 아니라 5 임
  function square(x) { 
    return x * x + z;
  }
  return square;
}
