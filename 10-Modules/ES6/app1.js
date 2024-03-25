// 🌟 10.3 Modules in ES6

const PI = Math.PI;
function degreesToRadians(d) {
  return (d * PI) / 180;
}
class Circle {
  constructor(r) {
    this.r = r;
  }
  area() {
    return PI * this.r * this.r;
  }
}

export { Circle, degreesToRadians, PI };
