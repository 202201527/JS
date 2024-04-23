let o = { s: "test", n: 0 };
let a = JSON.stringify(o, null, 0); // => '{\n "s": "test",\n "n": 0\n}'
// 2를 0 으로 변경하면 기존과 같아짐 => '{"s":"test","n":0}'

console.log(a);
