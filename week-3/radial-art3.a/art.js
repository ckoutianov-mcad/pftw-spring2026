function setup() {
    createCanvas (600, 600);
    background("#0D1A63");//background color
    angleMode(DEGREES);
}

function draw() {
    translate(300, 300);
    rotate(10);
    noFill();
    stroke("#8100D1");
    strokeWeight(10);
    rect(50, 50, 150, 150);
}