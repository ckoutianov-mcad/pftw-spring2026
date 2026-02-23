/* 
    WORK IN PROGRESS
    1. pair matching
    2. record score
  */
//var setup
const DOWN = 'down';
const UP = 'up';
let startingX = 150;//loops
let startingY = 150;
let cards = [];
gameState = {

};
//front - images
let cardfaceArray = [];
//back of card
let cardback;
function preload() {
    cardback = loadImage('images/cardback.png');
    cardfaceArray = [
      loadImage('images/banana.png'),
      loadImage('images/strawberry.png'),
      loadImage('images/bloodorange.png'),
      loadImage('images/watermelon.png'),
      loadImage('images/papaya.png')
    ]
}
//canvas setup
function setup() {
  createCanvas(800, 600);
  background("#30364F");
  let selectedFaces = [];
  for (let z = 0; z < 5; z++) {//images in project
    const randomIndex = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIndex];
    selectedFaces.push(face);
    selectedFaces.push(face);
    //remove the used cardface so that it does not get randomly select again
    cardfaceArray.splice(randomIndex, 1);
  }
  selectedFaces = shuffleArray(selectedFaces); //random selection
  for (let j = 0; j < 2; j++)  {//rows
    for (let i = 0; i < 5; i++)  {//columns
      const faceImage = selectedFaces.pop();
    cards.push(new Card(startingX, startingY, faceImage)); 
    startingX += 120; //space between for new cards
        }
    startingY += 120; //starting y
    startingX = 150;
  }
  //alert('Match the fruit slices.')
}//end setup

//event
function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if (cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
        }
    }
}//end event

//class constructor
class Card {
  constructor(x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.show();
  } //end card
  show() {
    if (this.face === DOWN) {
      fill("#E1D9BC");
      strokeWeight(3)
      stroke("#261CC1");
      ellipse(this.x, this.y, this.width, this.height);
      image(cardback, this.x - 50, this.y - 50); //adjust position ex. +10
    } else {
      fill("#ff7444");
      strokeWeight(3);
      stroke("#F1FF5E");
      ellipse(this.x, this.y, this.width, this.height);
       image(this.cardFaceImg, this.x - 50, this.y - 50); 
    }
  } //end show
  didHit(mouseX, mouseY) {
    const distance = dist(mouseX, mouseY, this.x, this.y);
    console.log("dist", distance);
    if (distance <= this.width / 2) {
      this.flip();
      return true;
    } else {
      return false;
    }
  } //x,y
  flip() {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  } //end flip
  //end of card-constructor
}

//shuffle 
  function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
      //pick random index
      const idx = Math.floor(Math.random() * counter);
      //decrease counter by 1 (decrement)
      counter--;
      //swap the last element with it
      const temp = array[counter];
      array[counter] = array[idx];
      array[idx] = temp;
    } return array;

  }//end shuffle array






