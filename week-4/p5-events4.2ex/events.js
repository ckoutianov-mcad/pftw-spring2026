//animate var
let rectX = 0;

//dimension of canvas
function setup () {
    createCanvas(500, 500);
}

//canvas for the shape
function draw () {
    background(155);
    drawShape();
    rectX += 2;
    noLoop()
}

//exact target hit
function mousePressed () {
    if ((mouseX >= rectX && mouseX <= 75) && (mouseY >=0 && mouseY<=75)) {console.log('Right on target!');
    }
}

//style of shape
function drawShape () {
    fill('blue');
    rect(rectX, 0 , 75, 75);
}