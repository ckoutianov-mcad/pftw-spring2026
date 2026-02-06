let rotateBy = 30;

function setup() {
    createCanvas (600, 600);
    background("#0D1A63");//background color
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 90);
    console.log(alt);
    noFill();//rectangle
    stroke("#8100D1");
    strokeWeight(1);
    rect(40, 90, 150 - alt, 150 * alt);
    noFill()//curve
    stroke("#FF52A0");
    strokeWeight(1);
    bezier(85, 20, 10, 10, 90, 90, 15 * alt, 80 / alt);
    noFill(); //circle
    stroke("#bdff52ff");
    strokeWeight(2);
    ellipse(160, 160 / alt, 150 - alt);
}


function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy +=50;
}
function mousePressed() {
    noLoop();
}