var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var container,containerImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	containerImg=loadImage("container.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	container=createSprite(400,630)
	container.addImage(containerImg)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 400 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if ( packageBody.position.y > 630){
	packageBody.position.velocitity=0
  }

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageBody.position.velocitity=-90
    packageBody.position.y= packageBody.position.y+90
  }
}



