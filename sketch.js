
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var ground1,ground2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   var ops ={
    isStatic: true
  };

  

  ground = Bodies.rectangle(50,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ground1 = Bodies.rectangle(300,150,70,10,ground_options);
  World.add(world,ground1);

  ground2 = Bodies.rectangle(100,200,100,20,ops);
  World.add(world,ground2);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
 Matter.Body.rotate(ground2,angle) ;
push();
translate (ground2.position.x,ground2.position.y);
rotate(angle);
rect(0,0,100,20);
pop();
 angle+=0.1; 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground1.position.x,ground1.position.y,70,10);
  

  
  
}

