
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;
var bob1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground=new roof(400,100,190,20);
	 

	 bob1=new Bob(320,300,20);
	 bob2=new Bob(360,300,20);
	 bob3=new Bob(400,300,20);
	 bob4=new Bob(440,300,20);
	 bob5=new Bob(480,300,20);

	 rope1=new Rope(bob1.body,roof.body,-100);
	 rope2=new Rope(bob2.body,roof.body,-50);
	 rope3=new Rope(bob3.body,roof.body,0);
	 rope4=new Rope(bob4.body,roof.body,100);
	 rope5=new Rope(bob5.body,roof.body,50);
	 

	Engine.run(engine);
  
}


function draw() {
  
  //rectMode(CENTER);

  background(0);

  ground.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 // drawSprites();
 
}



