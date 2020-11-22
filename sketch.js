var box1, box2, box3, box4

function setup() {
  createCanvas(800,400);
  box1=createSprite(200,100,100,50)
  box2=createSprite(400,100,75,75)
  box3=createSprite(500,100,85,65)
  box4=createSprite(600,100,95,85)
  box1.shapeColor= "green";
  box2.shapeColor= "green";
  box3.shapeColor= "green";
  box4.shapeColor= "green";
  box1.debug=true;
  box2.debug=true;
  box3.debug=true;
  box4.debug=true;
}

function draw() {
  background(0,0,0); 
  text(box1.x,100,300);
  text(box2.x,200,300)
  drawSprites();
  box2.y=mouseY;
  box2.x=mouseX;
//function with parameter list
  if (isTouching(box2,box3)){
    box3.shapeColor = "red";
    box2.shapeColor = "red";
  }else{
    box3.shapeColor= "green";
    box2.shapeColor= "green";
  }

}
//function with two arguements
function isTouching(object1,object2){
 if (object2.x-object1.x < object1.width/2 + object2.width/2
    && object1.x-object2.x < object1.width/2 + object2.width/2
    &&object2.y-object1.y<object1.height/2 + object2.height/2
    &&object1.y-object2.y<object1.height/2 + object2.height/2){
    return true;
  }
  else{
return false;
  }
}