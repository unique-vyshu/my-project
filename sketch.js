var r1;
var r2;
function setup(){
  createCanvas(1200,500);
  r1 = createSprite(650,400,50,200);
  r2 = createSprite(700,200,200,50);
}

function draw(){
  background("blue");
  r1.shapeColor = "yellow";
  r2.shapeColor = "yellow";

  r1.x = mouseX;
  r1.y = mouseY;

  if(r1.x - r2.x < r2.width/2 + r1.width/2 && r2.x - r1.x < r2.width/2 + r1.width/2 && r1.y - r2.y < r2.height/2 + r1.height/2 && r2.y - r1.y < r2.height/2 + r1.height/2 ){
    r1.shapeColor = "red";
    r2.shapeColor ="red";
  }

  else{
    r1.shapeColor = "yellow";
    r2.shapeColor = "yellow";
  }
  drawSprites();
}