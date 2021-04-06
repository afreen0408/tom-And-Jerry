
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg=loadAnimation("images/cat1.png");
    catImg1=loadAnimation("images/cat2.png","images/cat3.png");
    catImg2=loadAnimation("images/cat4.png")
    mouseImg=loadAnimation("images/mouse1.png")
    mouseImg1=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg2=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    cat=createSprite(700,500);
    cat.addAnimation("cat",catImg)
   
    cat.scale=0.2
    mouse=createSprite(100,600);
    mouse.addAnimation("mouse",mouseImg);
    //mouse.addAnimation("run",mouseImg1);
    mouse.scale=0.1

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if cat and mouse collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg2);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseTeasing", mouseImg1);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }  

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("runnning",catImg1)
    cat.changeAnimation("running");
    
        mouse.addAnimation("mouseLastImage", mouseImg2);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage")
}

}
