const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body;
var board;

function preload() {
  board = loadImage("images/background.png");
}

function setup() {
  createCanvas(600, 725);
  engine = Engine.create();
  world = engine.world;
  bluePiece = new Blue(20,600,40,40);
}

function draw() {
    background (158,113,79);
    Engine.update(engine);
    imageMode (CENTER);
    image(board,300,300,600,600);
    bluePiece.display();
  }
  