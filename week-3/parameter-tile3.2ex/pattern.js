function setup() {
  createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor, circleOutlineColor, dotColor) {
  translate(originX, originY);
  //background color
  fill(primaryColor);
  rect(0, 0, 200, 200);
  // x on tile
  stroke(secondaryColor);
  strokeWeight(10);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);
  
  //small circles
  stroke("brown");
  strokeWeight(10);
  fill(dotColor);
  circle(100, 50, 50);
  circle(50, 100, 50);
  circle(150, 100, 50);
  circle(100, 150, 50);
   
  //center circle
  fill("silver");
  stroke(circleOutlineColor);
  strokeWeight(10);
  circle(100, 100, 100);
}
function draw() {
  createTile(0, 0, 'teal', 'orange', 'aqua', 'magenta');
  createTile(0, 200, 'green', 'tomato', 'lime', 'violet');
  createTile(0, 200, 'olive', 'orange', 'aqua', 'magenta');
  createTile(200, -400, 'cyan', 'tomato', 'lime', 'violet');
  createTile(0, 200, 'teal', 'orange', 'aqua', 'magenta');
  createTile(0, 200, 'green', 'tomato', 'lime', 'violet');
  createTile(200, -400, 'olive', 'orange', 'aqua', 'magenta');
  createTile(0, 200, 'cyan', 'tomato', 'lime', 'violet');
  createTile(0, 200, 'teal', 'orange', 'aqua', 'magenta');
noLoop();
}