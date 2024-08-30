class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  set circumference(value) {
    this.radius = value / Math.PI / 2;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}

// Example usage:
const circle = new Circle(5);
console.log(circle.diameter); // 10
console.log(circle.circumference); // 31.41592653589793
console.log(circle.area); // 78.53981633974483

circle.diameter = 20;
console.log(circle.radius); // 10

circle.circumference = 62.83185307179586;
console.log(circle.radius); // 10

circle.area = 314.1592653589793;
console.log(circle.radius); // 10
