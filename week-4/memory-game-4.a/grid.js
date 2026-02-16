//var setup
const circleDiameter = 100;
let startingX = 200;
let startingY = 300;
let myCircles = [];

//canvas setup
function setup () {
    createCanvas(1000, 500);
    background("#617891");
  
    for (let i = 0; i < 5; i++) {
        ellipse(startingX, startingY, circleDiameter);
        myCircles.push({ x: startingX, y: startingY, id: i
        })
        startingX += 150;
    }
}

//event
function mousePressed () {
    for(let j = 0; j < myCircles.length; j++) {
        let distance = dist(mouseX, mouseY, myCircles[j].x,myCircles[j].y);
        if (distance < circleDiameter / 2) {
        console.log('circle clicked', myCircles[j].id);
    }
}
}