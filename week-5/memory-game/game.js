//var setup


//canvas setup
function setup() {
  createCanvas(1000, 800);
  background("#617891"); 
  let myCard = new Card();
  //alert('Match the fruit slices.')
}

//class constructor
class Card {
    constructor() {
    this.x = 100;
    this.y = 100;
    this.width = 80;
    this.height = 100;
    this.show();
}

show () {
    fill ("#000000");
    rect(this.x, this.y, this.width, this.height, 5);
}

//end of card-constructor
}