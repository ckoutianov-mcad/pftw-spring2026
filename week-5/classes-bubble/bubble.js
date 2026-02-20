//Global var
let bubbles = [];

//SETUP
function setup() {
  createCanvas(500, 500);
  //number of bubbles
  for (let i = 0; i < 6; i++)
    bubbles.push(new Bubble());
  }

//DRAW - movement 
function draw() {
  background("#003366");
  //loop for bubbles
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

//What it means to be a bubble
class Bubble {
  constructor() {
    this.x = 200;
    this.y = 250;
  }

  move() {
    this.x = this.x + random(-5, 15);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke("#00aeffff");
    strokeWeight(4);
    fill("#73dcffff");
    ellipse(this.x, this.y, 50, 50);
  }
}
