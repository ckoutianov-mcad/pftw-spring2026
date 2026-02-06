function setup() {
  createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor, circleOutlineColor, dotColor) {
  translate(originX, originY);
  fill(primaryColor);
  rect(0, 0, 200, 200);
  stroke(secondaryColor);
  strokeWeight(15);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);
  stroke("white");
  strokeWeight(10);
  fill(dotColor);
  circle(100, 50, 50);
  circle(50, 100, 50);
  circle(150, 100, 50);
  circle(100, 150, 50);
  fill("gray");
  stroke(circleOutlineColor);
  strokeWeight(10);
  circle(100, 100, 100);
}
function draw() {
  createTile(0, 0, 'red', 'white', 'green', 'magenta');
  createTile(0, 200, 'green', 'yellow', 'blue', 'violet');
  createTile(0, 200, 'blue', 'white', 'green', 'magenta');
  createTile(200, -400, 'cyan', 'yellow', 'blue', 'violet');
  createTile(0, 200, 'red', "white", "green", "magenta");
  createTile(0, 200, 'green', "yellow", "blue", "violet");
  createTile(200, -400, 'blue', "white", "green", "magenta");
  createTile(0, 200, 'cyan', 'purple', 'green', 'gray');
  createTile(0, 200, 'red', "purple", "green", "gray");

}