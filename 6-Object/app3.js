// ✨ 6.2.4 Object.create()을 이용하여 객체를 만드는 방법
"use strict";

let o1 = Object.create({ x: 1, y: 2 }); // o1 inherits properties x and y.
o1.x + o1.y; //=>3

//o1.dweb = "inu lab";

let o2 = Object.create(null); // o2 inherits no props or methods. 프로토타입도 없음

let o3 = Object.create(Object.prototype); // o3 is like {} or new Object().

let o = { x: "don't change this value" };

console.log("👿", Object.create(o));
console.log("😀", o);

// 🌟 Guard against accidental modifications
function lib(obj) {
  console.log(`👏🌟 ${obj.x}`);
  obj.x = "-------";  //prototype o의 x값이 수정 되는게 아니라 obj에 x 프로퍼티가 생김
  console.log("실수를 발생시킴", obj);
  for (let a in obj) {
    console.log(`🌟 ${obj[a]}`);
  }
}
lib(Object.create(o));
console.log("영향을 받았는지 확인", o); //영향을 안받음 (프로토타입 o의 x값을 수정한 게 아니기 때문)
