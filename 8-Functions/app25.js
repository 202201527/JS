// 🌟 Closures
// ✨ Nested functions 에서의 lexical scoping rules을 이해할 것
// 🚨 예제 1
// This function returns a function that always returns v

function constfunc(v) {
  return () => v;
}
// Create an array of constant functions:
let funcs1 = [];
for (var i = 0; i < 10; i++) funcs1[i] = constfunc(i); // 외부에서 바꿀 수 없음
// The function at array element 5 returns the value 5.
funcs1[5](); // => 5
funcs1[2](); // => 2 // 함수가 선언 될때 정해짐

// 🚨 예제 2
// Return an array of functions that return the values 0-9
function constfuncs() {
  let funcs2 = [];
  for (var i = 0; i < 10; i++) {  //var 보다는 let 선호
    funcs2[i] = () => i;
  }
  return funcs2;
}

let funcs2 = constfuncs();
funcs2[5](); // => 10; Why doesn't this return 5?


//렉시컬 스코프란 (Lexical Scope)란? 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정되는 것을 말한다. 
//즉, 함수를 어디서 선언하였는지에 따라 상위 스코프를 결정한다는 뜻이며, 
//가장 중요한 점은 함수의 호출이 아니라 함수의 선언에 따라 결정된다는 점이다.
