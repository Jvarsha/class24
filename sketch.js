const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
 var box1;var box2,box3,box4;
 var ground1;
 var p1,pg2;
var log1,log2;

function setup()
{
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

  box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
ground1=new Ground(600,height,1200,20); 
 
p1=new pg(810,350);
log1 =new Log(810,260,300,PI/2);

box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);
pg2= new pg(810,220);

log2 =new Log(810,180,300,PI/2);


}

function draw()
{
  background("purple");
Engine.update(engine);
  
box1.display();
box2.display(); 
ground1.display();
p1.display();
log1.display();

box3.display();
box4.display(); 

pg2.display();
log2.display();

}
