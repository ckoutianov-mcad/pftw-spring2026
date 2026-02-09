let rotateBy = 30;

//Canvas, initial intructions for user
function setup() {
    createCanvas (600, 600);
    background("#0D1A63");//background color
    angleMode(DEGREES);
    window.alert(
      "Creat your own design! You're in control on the amount of lines and shapes drawn. To stop, simply double-click on the canvas to make the design stop. Double-click again to continue where you left off."
    );
}

//Design 
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 90);
    console.log(alt);
    noFill();//rectangle
    stroke("#8100D1");
    strokeWeight(1);
    rect(40, 90, 150 - alt, 150 * alt);
    noFill()//curve
    stroke("#FF52A0");
    strokeWeight(1);
    bezier(85, 20, 10, 10, 90, 90, 15 * alt, 80 / alt);
    noFill(); //circle
    stroke("#bdff52ff");
    strokeWeight(2);
    ellipse(160, 160 / alt, 150 - alt);

}

//Loop
function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy +=50;
}

//Loop Control by user
function doubleClicked() {
  if (isLooping() === true) {
    noLoop();
  } else {
    loop();
  }
}