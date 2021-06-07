var iss , spacecraft; 


function preload(){
 spacebg=loadImage("spacebg.jpg");
 spacecraft1=loadImage("spacecraft1.png");
 spacecraft2=loadImage("spacecraft2.png");
 spacecraft3=loadImage("spacecraft3.png");
 spacecraft4=loadImage("spacecraft4.png");
 issimg=loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(300, 200, 50, 50);
  iss.addImage("iss",issimg);
  iss.scale=0.70
  spacecraft=createSprite(260,265,70,70);
  spacecraft.addImage("spacecraft",spacecraft1); 
  spacecraft.scale=0.20
}

function draw() {
  background(spacebg);  
  if (keyDown("LEFT_ARROW")){
  spacecraft.addImage("lft",spacecraft3)
  spacecraft.x=spacecraft.x-1;
  
  }
  if (keyDown("RIGHT_ARROW")){
    spacecraft.addImage("lfto",spacecraft4)
    spacecraft.x=spacecraft.x+1;
    
    }
    if (keyDown("DOWN_ARROW")){
      spacecraft.addImage("lfnt",spacecraft1)
      spacecraft.y=spacecraft.y+1;
      
      }
      if (keyDown("UP_ARROW")){
        spacecraft.addImage("lfjt",spacecraft2)
        spacecraft.y=spacecraft.y-1;
        
        }
        if (spacecraft.x=260 &&( spacecraft.y=265)){
       text("DOCING SUCCESFULL",200,300);
        }
  drawSprites();
}