
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var ground;
var gameState="onSling";
var ground1;
var ball;
var balli;
var box;
var box1;
var box2;
var score =0;
var box3;
var box4;
var box5;
var box6;
var box7;
var colorone="black";
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;
var box21;
var box22;
var box23;
var box24;
var box25;
var box26;
var box27;
var box28;
var box29;
var box30;
var box31;
var box32;
var box33;
var box34;
function preload(){
  balli=loadImage("polygon.png");

}
function setup() {
  createCanvas(1200,800);
  
  engine = Engine.create();
  world = engine.world;

  ground1=Bodies.rectangle(500,550,300,20,{isStatic:true});
  World.add(world,ground1);
  ground2=Bodies.rectangle(970,450,300,20,{isStatic:true});
  World.add(world,ground2);
  ground=Bodies.rectangle(600,750,1200,30,{isStatic:true});
  World.add(world,ground);
  box=new Box(375,450);
  box1=new Box(425,450);
  box2=new Box(475,450);
  box3=new Box(525,450);
  box4=new Box(575,450);
  box5=new Box(625,450);
  box6=new Box(400,400);
  box7=new Box(450,400);
  box8=new Box(500,400);
  box9=new Box(550,400);
  box10=new Box(600,400);
  box11=new Box(430,300);
  box12=new Box(480,300);
  box13=new Box(530,300);
  box14=new Box(580,300);
  box15=new Box(450,200);
  box16=new Box(500,200);
  box17=new Box(550,200);
  box18=new Box(480,100);
  box19=new Box(520,100);


  
  box20=new Box(895,200);
  box21=new Box(945,200);
  box22=new Box(995,200);
  box23=new Box(1045,200);
  box24=new Box(1095,200);
  box25=new Box(840,200);
  box26=new Box(910,100);
  box27=new Box(960,100);
  box28=new Box(1000,100);
  box29=new Box(1050,100);
  box30=new Box(900,0);
  box31=new Box(970,0);
  //ball not box
 
  ball=new Ball(200,200);
  slingshot=new SlingShot(ball.body,{x:200,y:200});
  Engine.run(engine);
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground1.position.x,ground1.position.y,300,20);
  rect(ground.position.x,ground.position.y,1200,30);
  rect(ground2.position.x,ground2.position.y,300,20);
  ball.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  //score
  box.score();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();
  slingshot.display();
  text("Score: "+score,200,50);
  getbacktime();
}
 

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}
async function getbacktime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responceone= await response.json();
  var Datetime = responceone.Datetime;
  var hour = Datetime.slice(1,3); 
  console.log(hour);
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}
function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(ball.body,{x:500,y:350});
  slingshot.attach(ball.body);
   gameState="onSling";
 }
}
