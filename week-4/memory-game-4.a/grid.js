//var setup
const circleDiameter = 100;
let startingX = 200;
let startingY = 100;
let myCircles = [];
let startingId = 0;

//canvas setup
function setup () {
    createCanvas(1040, 500);
    background("#617891");


//data array
    for (let k = 0; k <2; k++) {
       for (let i = 0; i < 5; i++) {
        ellipse(startingX, startingY, circleDiameter);
        myCircles.push({ x: startingX, y: startingY, id: startingId
        })
        startingX += 150;
        startingId ++;
    } 
    startingY += 150;
    startingX = 200;
    }
    console.log(myCircles);
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