var Roof,Ball1,Ball2,Ball3,Ball4,Ball5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload(){
	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof = new roof(410,100,340,30)
	Ball1 = new ball(530,400,30)
	Ball2 = new ball(470,400,30)
	Ball3 = new ball(410,400,30)
	Ball4 = new ball(350,400,30)
	Ball5 = new ball(290,400,30)

	Line1 = new string(Ball1.body,{x:530,y:100})
	Line2 = new string(Ball2.body,{x:470,y:100})
	Line3 = new string(Ball3.body,{x:410,y:100})
	Line4 = new string(Ball4.body,{x:350,y:100})
	Line5 = new string(Ball5.body,{x:290,y:100})
	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  Roof.display();
  rectMode(CENTER)
  Ball1.display();
  Ball2.display();
  Ball3.display();
  Ball4.display();
  Ball5.display();
  Line1.display();
  Line2.display();
  Line3.display();
  Line4.display();
  Line5.display();

 
}
function mouseDragged(){
    Matter.Body.setPosition(Ball1.body,{x:mouseX,y:mouseY})   
}
function mouseReleased(){
    slingshot.fly();
}