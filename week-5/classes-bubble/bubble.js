
class Bubble {
    constructor() {
        this.x = 200;
        this.y = 250;
    }

    move () {
        
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill("#815BFF");
        ellipse(this.x, this.y, 24, 24)
    }
}