
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world ;
var box1, box2, box3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies 
	ground = new Ground(400,height,800,20);
    paper = new Paper(100,600,20);
	box1 = new Box(700,680,150,20);
	box2 = new Box(630,650,20,80);
	box3 = new Box(770,650,20,80);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  Engine.update(engine);

  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35})
	}
}
