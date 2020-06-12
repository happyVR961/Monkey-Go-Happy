//Global Variables
var bgimage, backg, monkey, monkeyimg, ground, groundimg, foodgroup,obstaclesgroup,bananaimg,obstacleimg;
var gameOver,ground1;
var count = 0;

function preload(){
  bgimage = loadImage("jungle.jpg");
  monkeyimg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaimg = loadImage("Banana.png");
  obstacleimg = loadImage("stone.png");
  ground1 = loadImage("ground.jpg");
  
}


function setup() {
  createCanvas(600,300);
  backg = createSprite(0,0,600,300);
  backg.addImage("bg", bgimage);
  backg.x = backg.width/2;
  backg.velocityX = -3;
  
  monkey = createSprite(100,250,20,20);
  monkey.addAnimation("animal",monkeyimg);
  monkey.scale = 0.1;
  
  ground = createSprite(0,300,1200,5);
  //ground.velocityX = 3;
  ground.x = ground.width/2;
 // ground.addImage("grd", ground1);
 ground.visible = false;
  
  foodgroup = new Group();
  obstaclesgroup = new Group();
  
  var count = 0;
}


function draw(){
 background(255);
 if (backg.x<400){
 backg.x = backg.width/2;
 } 
   if (foodgroup.isTouching(monkey)){
   foodgroup.destroyEach();
     count = count+1;
     monkey.scale = 0.1;
   }
   
   if (keyDown("space")){
   monkey.velocityY = -10;
   }
  monkey.velocityY = monkey.velocityY + 0.6;
  monkey.collide(ground);
  if (obstaclesgroup.isTouching(monkey)){
  monkey.scale = 0.07;
  }
 obscle();
  fruit();
 
 
  drawSprites();
  fill("white");
  textSize(18);
   text("Score: "+ count, 500,50);
}
 

function obscle(){
  if (frameCount % 250 === 0){
var obstacle = createSprite(600,258,15,15);
    obstacle.velocityX = -3;
    obstacle.addImage("ostc", obstacleimg);
    obstacle.scale = 0.15;
    obstacle.lifetime = 200;
    obstaclesgroup.add(obstacle);
  }

}

function fruit(){
if (frameCount % 150 === 0){
var food = createSprite(600,150,15,15);
food.velocityX = -4;
  food.addImage("foodd", bananaimg);
  food.y = random(120,170);
  food.scale = 0.06;
  food.lifetime = 200;
  foodgroup.add(food);
 monkey.depth = food.depth +1;
}
}