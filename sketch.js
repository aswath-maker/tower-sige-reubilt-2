const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  backgroundImg = loadImage("maxresdefault-back.jpg");
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(400,300,800,20);
  ground = new box(0,390,10000,20);
  box2 = new target(400,221,50,50)
  box3 = new target(400,302,50,50);
  box4 = new target(400,308,50,50);
  box4 = new target(400,208,50,50);
  box5 = new target(400,204,50,50);
  box6 = new target(400,204,50,50);
  box7 = new target(400,200,50,50);
  box8 = new target(400,200,50,50);
 // box9 = new target(400,200,50,50);
  //box10 = new target(400,200,50,50);
  //box11 = new target(400,200,50,50);
 
  box14 = new target(502,281,50,50);
  box15 = new target(502,281,50,50);
  box16 = new target(502,281,50,50);
  box17 = new target(502,281,50,50);
  box18 = new target(502,281,50,50);
 
  box114 = new target(272,210,50,50);
  box115 = new target(272,210,50,50);
  box116 = new target(272,210,50,50);
  box117 = new target(272,210,50,50);
  box118 = new target(272,210,50,50);
 

  shooter = new paper(100,200,10);                                  
  chain1 = new SlingShot(shooter.body , {x : 100 , y : 200});

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);


ground.display();
shooter.display();
chain1.display();
//box2.display2();
//box2.display2();
box4.display2();
box5.display2();
box6.display2();
box1.display2();
box7.display2();
box8.display2();
//box9.display2();
//box10.display2();
//box11.display2();
drawSprites();

box14.display2();
box15.display2();
box16.display2();
//box1.display2();
box17.display2();
box18.display2();

box114.display2();
box115.display2();
box116.display2();
//box1.display2();
box117.display2();
//box118.display2();


}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain1.fly();
}

function keyPressed(){

if(keyCode === 32){
  chain1.attach(shooter.body);
   Matter.Body.setPosition(shooter.body,{x:100, y:200});
}

}

function keyPressed(){

  if(keyCode === 32){
    chain1.attach(shooter.body);
     Matter.Body.setPosition(shooter.body,{x:100, y:200});
  }
  
  }