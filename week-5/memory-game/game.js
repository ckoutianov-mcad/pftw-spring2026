/* 
WORK IN PROGRESS
1. target hit for circle is on lower right quarter. 
*/

//var setup
const DOWN = 'down';
const UP = 'up';
let startingX = 150;//loops
let startingY = 150;
let cards = [];
gameState = {

}

//canvas setup
function setup() {
  createCanvas(1000, 600);
  background("#30364F");
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 5; i++) {
    cards.push(new Card(startingX, startingY)); 
    startingX += 150; //space between for new cards
        }
    startingY += 150; //starting y
    startingX = 150;
  }
  //alert('Match the fruit slices.')
}//end setup

//event
function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if (cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped');
        }
    }

}//end event

//class constructor
class Card {
    constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.face = DOWN;
    this.show();
}//end card
show () {
    if (this.face === DOWN)
        {
          fill("#E1D9BC");
          ellipse(this.x, this.y, this.width, this.height);
        } else {
            fill("#ff7444");
            ellipse(this.x, this.y, this.width, this.height);
    }
}//end show
didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width &&
        mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        } 
    } //x,y
flip () {
    if (this.face === DOWN) {
        this.face = UP;
    } else {
        this.face = DOWN;
    }
        this.show();
}//end flip


//end of card-constructor       
}






