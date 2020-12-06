
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, rope1, ball2, rope2, ball3, rope3, ball4, rope4,roof, ball5, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(470,260);
	ball1 = new Ball(300,500);
	rope1 = new Rope(ball1.body,{x:300, y:250});
	ball2 = new Ball(380,500);
	rope2 = new Rope(ball2.body,{x:380, y:250});
	ball3 = new Ball(460,500);
	rope3 = new Rope(ball3.body,{x:460, y:250});
	ball4 = new Ball(540,500);
	rope4 = new Rope(ball4.body,{x:540, y:250});
	ball5 = new Ball(620,500);
	rope5 = new Rope(ball5.body,{x:620, y:250});
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  ball1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();
  ball5.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-90,y:-85});
	}
}



