let bubble1;
let bubble2;

function setup() {
  createCanvas(500, 500);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
}

function draw() {
  background("#003366");
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 250;
  }

  move() {
    this.x = this.x + random(-5, 10);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke("#0000FF");
    strokeWeight(4);
    fill("#66FF00");
    ellipse(this.x, this.y, 50, 34);
  }
}
