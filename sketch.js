let color = ['pink', 'white', 'clear', 'black', 'brown', 'purple', 'yellow'];
let crystals = ['rose quartz', 'clear quartz', 'selenite', 'tourmaline', 'tigers eye', 'amethyst', 'citrine'];

let cr;
let co;

let co1 = 177
let co2 = 217
let co3 = 156


let wrds;

function setup() {
  createCanvas(400, 400);
  background(177, 156, 217);
  frameRate(60);
  intText();
  fortBall();
}

function draw() {
}

function mousePressed() {
  cr = int(random(crystals.length));
  co = int(random(color.length));
  wrds = color[co] + ' ' + crystals[cr] + '.';
  co1 = random(217)
  co2 = random(217)
  co2 = random(217)
  fortText();
  console.log(wrds);
}

function fortBall() {
  noStroke();
  fill(co1, co2, co3);
  circle(50, 50, 50);
    circle(10, 300, 50);
   circle(190, 200, 90);
     circle(290, 50, 20);
  rect(300, 340, 25, 25);
  rect(360, 180, 50, 50);
    rect(20, 140, 10, 10);
  rect(140, 330, 10, 40);
   rect(360, 50, 10, 40);
  
}

function intText() {
  fill(255);
  textAlign(CENTER);
  //this is a lie, you can click anywhere
  text('Click for a random crystal', width*0.5, height*0.3);
}

function fortText() {
  background(177, 156, 217);
  intText();
  fortBall();
  fill(255);
  textAlign(CENTER);
  text('You obtain a', width*0.5, height*0.7);
  text(wrds, width*0.5, height*0.75)
}