var background1,background2;
var alyssa,angela;
var farmtruck;
function preload(){
    background2=loadImage("Screenshot (2).png");
    farmtruck=loadImage("Truck.png");
}
function setup(){
createCanvas(displayWidth,displayHeight)
alyssa=createSprite(278,626,50,30);
alyssa.addImage(farmtruck)
alyssa.debug=true;
alyssa.setCollider("rectangle",0,0,250,200)
alyssa.scale=0.4
alyssa.velocityX=3;
alyssa.velocityY=-2;
angela=createSprite(427,546,10,5);
angela.debug=true;
angela.pointTo(-800,50);
alyssa.shapeColor=("lightblue")
}
function draw(){
background(0)
image(background2,0,0,width,height)
text(mouseX+","+mouseY,mouseX,mouseY)

//alyssa.collide(angela)
if(alyssa.isTouching(angela)){
    alyssa.setVelocity(0,0)
}
if(keyDown("space")){
angela.x=1206;
angela.y=157;
alyssa.setVelocity(4,-2);
}
cars()
drawSprites()
}
function cars(){
    if(frameCount%60==0){
        var car=createSprite(804,718,30,30)
        car.setVelocity(-3,-1)
    }
}