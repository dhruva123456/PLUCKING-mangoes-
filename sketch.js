
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bgimg,rock,chain;
var tree,mango1,mango2,mango3,mango4,mango5;
var boy,boyimg;
function preload()
{
	bgimg = loadImage("sprites/bg.jpg")
	boyimg = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	
	rock = new stone(320,225);
	chain = new SlingShot(rock.body,{x:190 , y:295});
	tree = new Tree(1000,300);
	mango1 = new Mango(876,320,6);
	mango2 = new Mango(836,256,4);
	mango3 = new Mango(1010,305,6.5);
	mango4 = new Mango(940,180,6);
	mango5 = new Mango(970,235,5);
    ground = Bodies.rectangle(640,535,1290,100,{isStatic:true});
	World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
	if (keyIsPressed === true) {
		chain.attach();
	  }
  rectMode(CENTER);
  background(bgimg);
  imageMode(CENTER);
    image(boyimg,270,385,250,300);
  drawSprites();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rock.display();
  collision(rock,mango1);
	collision(rock,mango2);
	collision(rock,mango3);
	collision(rock,mango4);
	collision(rock,mango5);
	strokeWeight(5);
	stroke("white")
	textSize(25)
	fill("green")
	text("PLUCK THE MANGOES",30,50)
	fill("red")
	text("PRESS SPACE TO GET STONE BACK",600,50)
	

}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}