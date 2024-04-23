// 🌟 Closures
// ✨ Nested functions 에서의 lexical scoping rules을 이해할 것

// 🔥 예제) 이전 예제와는 달리 안쪽에 있던 () 가 외부에 놓임. 즉, "nested function"를 반환함
// 🙋 외부에서 nested function이 호출되면 어떤 일이 발생하는가?



let scope = "global scope"; // A global variable
function checkscope() {
  let scope = "local scope"; // A local variable
  function f() {
    return scope; // Return the value in scope here
  }
  return f;
}
scope = "Incheon National University";

let v = checkscope();
let s = v(); // 🙋 What does this return? => local scope
// checkscope()()
