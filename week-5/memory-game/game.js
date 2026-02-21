//var setup
let myCard;

//canvas setup
function setup() {
  createCanvas(1000, 800);
  background("#30364F"); 
  myCard = new Card();
  //alert('Match the fruit slices.')
}//end setup

//event
function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
}//end event

//class constructor
class Card {
    constructor() {
    this.x = 180;
    this.y = 180;
    //this.diameter = 10;
    this.width = 120;
    this.height = 120;
    this.show();
}//end card
show () {
    fill("#E1D9BC");
    strokeWeight(5);
    stroke("#F0F0DB");
    ellipse(this.x, this.y, this.width, this.height);
    //rect(this.x, this.y, this.width, this.height, 5);
}//end show
didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width &&
        mouseY >= this.y && mouseY <= this.y + this.height) {
            return true;
        } else {
            return false;
        } 
    } //x,y


//end of card-constructor       
}






