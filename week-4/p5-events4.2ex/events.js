//animate var
let rectX = 0;
const rectWidth = 75;
let rectY;
const rectHeight= 75;

//hit count
let clickCount = 0;

//speed
let speed;

//dimension of canvas
function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3);
    window.alert('Click on the square with your mouse as fast as possible! Your score will be recorded.')
}

//canvas for the shape
function draw () {
    background(155);
    drawShape();
    rectX+= speed;
     if (rectX > width) {
       noLoop();
       text("Your score was " + clickCount, 250, 300);
     }
}

//exact target hit
function mousePressed () {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY<= rectY + rectHeight)) {
    clickCount++;
    console.log('Hit #', clickCount);
    }  
}

//style of shape
function drawShape () {
    fill('black');
    rect(rectX, rectY , rectWidth, rectHeight);
}