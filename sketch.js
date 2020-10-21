
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ball1
var bin1,bin2,bin3
var ground1
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bin1 = new bin (730,670,10,30)
	bin2 = new bin (740,690,30,10)
	bin3 = new bin (750,670,10,30)
	ball1 = new ball (100,500,20,20)
	ground1 = new ground (400,790,800,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bin1.display()
  bin2.display()
  bin3.display()
  ball1.display()
  ground1.display()

  drawSprites();
 
}



