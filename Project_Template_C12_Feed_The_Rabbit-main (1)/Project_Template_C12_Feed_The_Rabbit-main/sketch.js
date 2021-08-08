var garden,rabbit;
var gardenImg,rabbitImg;
var appleimg;
var apple


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg  =  loadImage("apple.png") 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

applesGroup=new Group();
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}








function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if(keyDown("space")&& rabbit.y >= 100) {
    rabbit.velocityY = -13;
  }
  rabbit.velocityY = rabbit.velocityY + 0.8
 

   //spawn the cloud
spawnApples();

  drawSprites();
}
function spawnApples(){

if (frameCount % 80 ===0){

  apple=createSprite(100,170,10,10)
  apple.x=Math.round(random(50,340))
  apple.scale=0.08;



  apple.addImage(appleimg)
  apple.velocityX=0.2
  apple.lifeTime=300
  applesGroup.add(apple)

applesGroup.setVelocityXEACH=0.3



}
if (applesGroup.isTouching(rabbit)){
  applesGroup.destroyEach();
}

}