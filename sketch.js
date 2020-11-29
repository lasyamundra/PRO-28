//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, boyImage;


function setup(){
   boyImage = loadImage ("sprites/boy.png")
}


function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (600,483,1199,30);

	tree = new Tree (1000,750);

	stone = new Stone (150,250,10);

	mango1 = new Mango(500,450,50,50);
	mango2 = new Mango(700,450,50,50);
	mango3 = new Mango(600,400,50,50);
	mango4 = new Mango(630,475,50,50);
	mango5 = new Mango(550,425,50,50);
	mango6 = new Mango(525,480,50,50);
	mango7 = new Mango(675,375,50,50);
	mango8 = new Mango(625,390,50,50);
	mango9 = new Mango(575,340,50,50);
	mango10 = new Mango(625,360,50,50);

	chain = new Chain(stone.body,{x:150,y:575});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255,255,255);
  
	ground.display();
	tree.display();
  
    image (boyImage,200,340,200,300);

	stone.display();
  
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display(); 
  
	chain.display();
  
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	detectCollision(stone,mango10);
  }
  
  function mouseDragged() {
	  Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
  }
  function mouseReleased() {
	  chain.fly();
  }
  
  function detectCollision(lstone,lmango) {
	  mangoBodyPosition = lmango.body.position;
	  stoneBodyPosition = lstone.body.position;
  
	  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	  if(distance<=lmango.r+lstone.r) {
		  Matter.Body.setStatic(lmango.body,false);
	  }
  }
  
  function keyPressed() {
	if(keyCode === 32) {
	  Matter.Body.setPosition(stone.body, {x:225,y:420});
	  chain.attach(stone.body);    
	}
  }