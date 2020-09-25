var fixedRect,movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(200, 200, 50, 80);
 movingRect = createSprite(400,200,80,30);
 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";
 rect1 = createSprite(600,600,20,20);
 rect1.velocityX = -5;
 rect2 = createSprite(200,600,20,20);
 rect2.velocityX = 5;
}

function draw() {
  background(0); 
movingRect.y = World.mouseY;
movingRect.x = World.mouseX;

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
movingRect.shapeColor="red";
fixedRect.shapeColor="yellow";
}else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

if(rect1.x-rect2.x<rect1.width/2+rect1.width/2 && rect2.x-rect1.x<rect2.width/2+rect1.width/2){
  rect1.velocityX = rect1.velocityX*(-1);
  rect2.velocityX = rect2.velocityX*(-1);
}

  drawSprites();
}