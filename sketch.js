var sea;
var ship;
var invisibleGround;

function preload(){
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_image = loadImage("sea.png")
}

function setup(){
  createCanvas(500,400);
  sea = createSprite(250,200,3000,50);
  sea.addAnimation("running",sea_image);
  sea.scale=0.25;
 
  ship = createSprite(300,200,20,20);
  ship.addAnimation("running",ship_running);
  ship.scale=0.3
  ship.x=100;
  invisibleGround = createSprite(100,300,1000,10)
  invisibleGround.visible = false
   

}

function draw(){
  background("lightblue")
  
  sea.velocityX = -4

  if(keyDown("space") && ship.y>=150){
    ship.velocityY = ship.velocityY -4
  }
  
  ship.velocityY = ship.velocityY +0.5
 if(sea.x<0){
   sea.x = sea.width/10;
 }
 drawSprites();
 ship.collide(invisibleGround)
}



