//Declare variables for game objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var userEngine,userWorld;
var bg;
var bird;
var pig1, pig2;
var ground, platform;
var boy1, boy2; 
var tree1, tree2;
var mango1, mongo2, mango3, mango4;
var stone1; 
var constrainedLog;
var slingShot;

//Create Media library and load to use it during the course of the software 
//executed only once at the start of the program 
function preload() {
  boy1 = loadImage("boy.png");
  tree1= loadImage("tree.png");
}

function setup() {
  createCanvas(1200, 800);

  userEngine = Engine.create();
  userWorld = userEngine.world;
  //object name = new Classname(constructor call)
  ground = new Ground(600,800,1200,20);

  stone1 = new Stone(200,550,50,50);

  mango1 = new Box(800,320,70,70);
  mango2 = new Box(900,320,70,70);
  mango3 = new Box(850,320,70,70);
  mango4 = new Box(900,300,70,70);

  slingShot = new SlingShot(stone1.body,{x:180,y:530});
 
}

function draw(){
    background("white");
    Engine.update(userEngine);
    image(tree1,600,100,600,700);

    image(boy1,100,400,400,500)
    ground.display();

    stone1.display();
    mango1.display();
    mango2.display();

    slingShot.display();

    detectCollision(stone1,mango1);
    detectCollision(stone1,mango2);
}



function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keypressed(){
  if (keyCode == 32){
    Matter.Body.setPosition(stone1.body,{x:200, y:550})
    slingShot.attach(stone1.body)
  }
}

function detectCollision(lstone,lmango){
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position

    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y )
    if(distance<=lmango.r+lstone.r){
       Matter.Body.setStatic(lmango.body,false);
    }
}
