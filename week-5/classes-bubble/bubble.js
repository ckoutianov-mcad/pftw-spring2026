let bubble;

function setup() {
    createCanvas(500, 500);
    bubble = new Bubble();
}

function draw() {
    background("#FF00BF");
    bubble.move();
    bubble.show();
}

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 250;
    }

    move () {
        this.x = this.x + random(-5, 10);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill("#815BFF");
        ellipse(this.x, this.y, 50, 34)
    }
}