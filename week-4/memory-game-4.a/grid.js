//var setup
const circleDiameter = 100;
let circleX = 200;
let circleY = 300; 


//canvas setup
function setup () {
    createCanvas(1000, 500);
    background("#617891");
    ellipse(circleX, circleY, circleDiameter);
}

//event
function mousePressed () {
    let distance = dist(mouseX, mouseY, circleX, circleY);
    if (distance < circleDiameter / 2) {
        console.log('circle clicked');
    }
}
