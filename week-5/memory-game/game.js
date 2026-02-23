//var setup
const DOWN = 'down';
const UP = 'up';
let startingX = 150;
let startingY = 150;
let cards = [];
gameState = {
  totalPairs: 10,
  flippedCards: [],
  numberMatched: 0,
  attempts: 0,
  waiting: false
};
//front - card images
let cardfaceArray = [];
//back - start of gameboard
let cardback;
function preload() {
    cardback = loadImage('images/cardback.png');
    cardfaceArray = [
      loadImage("images/banana.png"),
      loadImage("images/bloodorange.png"),
      loadImage("images/coconut.png"),
      loadImage("images/dragonfruit.png"),
      loadImage("images/kiwi.png"),
      loadImage("images/orange.png"),
      loadImage("images/papaya.png"),
      loadImage("images/pomegranate.png"),
      loadImage("images/strawberry.png"),
      loadImage("images/watermelon.png")
    ];
}
//canvas setup
function setup() {
  createCanvas(800, 850);
  let selectedFaces = [];
  for (let z = 0; z < 10; z++) {
    const randomIndex = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIndex];
    selectedFaces.push(face);
    selectedFaces.push(face);
    //remove the used cardface so that it does not get randomly selected again
    cardfaceArray.splice(randomIndex, 1);
  }
  //random selection 
  selectedFaces = shuffleArray(selectedFaces);
  for (let j = 0; j < 4; j++)  {
    for (let i = 0; i < 5; i++)  {
      const faceImage = selectedFaces.pop();
    cards.push(new Card(startingX, startingY, faceImage)); 
    startingX += 120; 
        }
    startingY += 120;
    startingX = 150;
  }
}

//draw - styling, scoreboard, message at the end of game
function draw () {
   background("#30364F");
   if (gameState.numberMatched === gameState.totalPairs) {
fill("#3A9AFF");
noStroke();
textSize(24);
text('Great job! Memory games help improve mental alertness. 👏', 100, 650);
    noLoop();
   }
   for (let k = 0; k < cards.length; k++) {
    if(!cards[k].isMatch) {
      cards[k].face = DOWN;
    }
    cards[k].show();
   }
   noLoop();
   gameState.flippedCards.length = 0;
   gameState.waiting = false;
   fill("#EDDCC6");
   strokeWeight(1);
   stroke("#EDDCC6");
   textSize(24);
   text('Slice Fruit Memory Game: Match the fruits!', 140, 65);
   fill("#EDDCC6");
   strokeWeight(1);
   stroke("#EDDCC6");
   textSize(36);
   text('Attempts: ' + gameState.attempts, 475, 750);
   text('Matches: ' + gameState.numberMatched, 100, 750);
}

//event - when user clicks on cards
function mousePressed() {
    if (gameState.waiting) {
      return;
    }
    for (let k = 0; k < cards.length; k++) {
      //check number of cards flipped, then trigger flip function
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
      gameState.attempts++
      //cards matched to the same image
      if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
        //card match, score: marked as matched and prevents cards to flip back
        gameState.flippedCards[0].isMatch = true;
        gameState.flippedCards[1].isMatch = true;
        //empty the flipped cards array
        gameState.flippedCards.length = 0;
        //increment the score
        gameState.numberMatched++;
        loop();
      } else {
          gameState.waiting = true;
        const loopTimeout = window.setTimeout(() => {
          loop();
          window.clearTimeout(loopTimeout);
        }, 1000)
      }
    }
}

//class template - constructor
class Card {
  constructor(x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }
  show() {
    if (this.face === UP || this.isMatch) {
       fill("#E1D9BC");
       strokeWeight(3);
       stroke("#E1D9BC");
       ellipse(this.x, this.y, this.width, this.height);
       image(this.cardFaceImg, this.x - 50, this.y - 50); 
    } else {
     fill("#0D1A63");
      strokeWeight(5)
      stroke("#0D1A63");
      ellipse(this.x, this.y, this.width, this.height);
      image(cardback, this.x - 50, this.y - 50);
    }
  }
  didHit(mouseX, mouseY) {
    const distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance <= this.width / 2) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }
  flip() {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
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
  }






