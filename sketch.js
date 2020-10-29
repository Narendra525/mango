
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,tree,boy
var mg2,mg1,mg3,mg4,mg5;
var stone1

function preload()
{
	tree1=loadImage("tree.png")
	boy1=loadImage("boy.png")
	mango1=loadImage("mango.png")
	mango2=loadImage("mango.png")
	mango3=loadImage("mango.png")
	mango4=loadImage("mango.png")
	mango5=loadImage("mango.png")
	stone=loadImage("stone.png")
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
	ground1=new ground(500,680,1500,20)
	tree=createSprite(900,450,50,50)
	tree.addImage(tree1)
	tree.scale=0.4

	boy=createSprite(250,620)
	boy.addImage(boy1)
	boy.scale=0.1

	mg1 =createSprite(850,320,50,50)
	mg1.addImage(mango1)
	mg1.scale=0.1

	mg2 =createSprite(950,250,50,50)
	mg2.addImage(mango2)
	mg2.scale=0.1

	mg3 =createSprite(900,350,50,50)
	mg3.addImage(mango3)
	mg3.scale=0.1

	mg4 =createSprite(800,400,50,50)
	mg4.addImage(mango4)
	mg4.scale=0.1

	mg5 =createSprite(980,400,50,50)
	mg5.addImage(mango5)
	mg5.scale=0.1

	stone1=createSprite(190,572)
	stone1.addImage(stone)
	stone1.scale=0.1

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
 
  ground1.display()

  
 
  drawSprites();
 
}



