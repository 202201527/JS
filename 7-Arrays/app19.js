// 🌟🌟 Flattening arrays with flat() and flatMap()

// ✨ flat() 메서드는 배열 원소들을 "flattened" 하게 한 뒤 새로운 배열을 반환함
// 예시 ①. 아래와 같이 array가 nesting 되어 있는 경우 argument를 전달하지 않으면 단지 하나의 level만 펼침
[1, [2, 3]].flat(); // => [1, 2, 3]
[1, [2, [3]]].flat(); // => [1, 2, [3]]

// 예시 ②. 중첩된 경우 펼치고 싶은만큼 인자 값을 전달할 것
let a = [1, [2, [3, [4]]]];
a.flat(1); // => [1, 2, [3, [4]]]
a.flat(2); // => [1, 2, 3, [4]]
a.flat(3); // => [1, 2, 3, 4]
a.flat(4); // => [1, 2, 3, 4]

// ✨ flatMap() 메서드는 map() 메서드와 flat() 동작을 함께 함. 즉, 배열을 펼치면서 각 원소에 연산을 수행할 수 있음
// 예시 ①.
let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap((phrase) => phrase.split(" ")); // 공백으로 구분
words; // => ["hello", "world", "the", "definitive", "guide"];

// 예시 ②.
// Map non-negative numbers to their square roots
[-2, -1, 1, 2].flatMap((x) => (x < 0 ? [] : Math.sqrt(x))); // => [1, 2**0.5]
// map() 메서드를 이용하면?
[-2, -1, 1, 2].map((x) => (x < 0 ? [] : Math.sqrt(x))); // => [[], [], 1, 2**0.5]
