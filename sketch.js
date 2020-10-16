const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledBall, ground, wall1, wall2, wall3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(780, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	wall1 = Bodies.rectangle(760, 630, 200, 20 , {isStatic:true} );
	World.add(world, wall1);
	
	wall2 = Bodies.rectangle(300, 100, 20, 100 , {isStatic:true} );
	World.add(world, wall2);
	
	wall3 = Bodies.rectangle(500, 600, 20, 100 , {isStatic:true} );
	World.add(world, wall3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
 
}

function display(){
	ground.display;
	wall1.display;
	wall2.display;
	wall3.display;
}



