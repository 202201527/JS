// 🌟 Closures
// ✨ Nested functions 에서의 lexical scoping rules을 이해할 것

// 😯 두 가지 방식을 비교할 것

// ✨ ① 방법
// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger1.counter = 0;
// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger1() {
  return uniqueInteger1.counter++; // Return and increment counter property
}
uniqueInteger1(); // => 0
uniqueInteger1(); // => 1

// ✨ ② 방법 (외부에서 counter 변수에 접근 할 수 없음)
// uniqueInteger() function that used a property of the function itself 
// to keep track of the next value to be returned.

let uniqueInteger2 = (function () {
  // Define and invoke
  let counter = 0; // Private state of function below
  return function () {
    return counter++;
  };
})(); // 정의하자마자 실행 됨
uniqueInteger2(); // => 0
uniqueInteger2(); // => 1

//live 서버에서 출력하면 2가 나옴 (코드에서 1 까지 count 했기 때문)
