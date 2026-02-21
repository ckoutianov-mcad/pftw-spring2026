//var setup
let myCard;
const DOWN = 'down';
const UP = 'up';
let startingX = 100;//loops
let startingY = 100;
let cards = [];
gameState = {

}

//canvas setup
function setup() {
  createCanvas(800, 600);
  background("#30364F");
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 5; i++) {
    cards.push(new Card(startingX, startingY)); 
    startingX += 150;
    console.log(startingX);}
  }
    startingY += 150;
    startingX = 100
  {

 startingX += 100;
  }
  //alert('Match the fruit slices.')
}//end setup

//event
function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
}//end event

//class constructor
class Card {
    constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 120;
    this.height = 120;
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






