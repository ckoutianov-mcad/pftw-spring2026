function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0,0);
    fill('green');
    rect(0, 0, 200, 200);
    stroke('white');
    strokeWeight(15);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    stroke('white');
    strokeWeight(10)
    fill('pink');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    fill('gray');
    stroke('pink');
    strokeWeight(10);
    circle(100, 100, 100);
    
}
function draw() {
    createTile();
    noLoop();
}