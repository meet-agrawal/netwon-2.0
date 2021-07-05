
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var chain1,chain2,chain3,chain4,chain5,chain6
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(425,300,250,40);
	bob1 = new bob(340,470,40)
	bob2 = new bob(380,470,40)
	bob3 = new bob (420,470,40)
	bob4 = new bob (460,470,40)
	bob5 = new bob (500,470,40);
chain=new SlingShot(bob1.body,{x:290,Y:100})
	
  
}


function draw() {
  rectMode(CENTER);
  Engine.run(engine);
  background(230);
  roofObject.display();
  

  
  
  roofObject.display()
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display()
  bob5.display()
  chain.display()
  
 
}






