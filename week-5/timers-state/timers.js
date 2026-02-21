let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 30;
const distance = 10;

function setup () {
    createCanvas(500, 500);
    background("#3F4C5C");
    window.alert('Press any number 0-9 on your number keys to change grayscale of the squares. It will let you know when it is complete.')
}

function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}
function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)){
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 0, 255);
    blockColor = keyToNumber;
}

window.setTimeout(() => {
drawTimer = window.setInterval(() => {
  if (blockY - 50 <= height) {
    drawBlock(blockX, blockY, blockColor);
    blockY += distance;
  } else {
    blockY = 0;
    blockX += 50;
  }
  if (blockY - 50 > height && blockX - 50 > width) {
    window.clearInterval(drawTimer);
    alert('Your work is complete.'); }
}, speed);
}, 1500);
