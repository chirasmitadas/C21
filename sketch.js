var fixedRect;
var movingRect;
var gameObj1, gameObj2;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(200,100,50,100);

  movingRect.shapeColor ="green";
  fixedRect.shapeColor = "green";

   //debugMode On for Sprites
   movingRect.debug = true;
   fixedRect.debug = true;

    gameObj1 = createSprite(200,100,90,20);
    gameObj2 = createSprite(250,50,30,10);

    gameObj1.shapeColor = "green";
    gameObj2.shapeColor="green";

    gameObj1.debug = true;
    gameObj2.debug = true;

    movingRect.velocityX = 1;
  movingRect.velocityY = -1;

}

function draw() {
  background(0); 
 
  //make the movingRect movable using mouse
  

 
  /*if(detectCollision(movingRect, gameObj2)){
    //change the color of the rectangles to red
    gameObj2.shapeColor ="red";
    movingRect.shapeColor = "red";
  }
  else{
    //don't change the color of the rectangles
    gameObj2.shapeColor ="green";
    movingRect.shapeColor = "green";
  }*/

detectBounceOff(movingRect, gameObj2);


  drawSprites();
}

function detectBounceOff(object1, object2){
  var distUsingWidth = object1.width/2 +object2.width/2;
  var distUsingHeight = object1.height/2 +object2.height/2;
  if ((object2.x-object1.x<=distUsingWidth) &&
  (object1.x-object2.x<=distUsingWidth)){
    object2.velocityX = object2.velocityX * (-1);
    object1.velocityX = object1.velocityX * (-1);
  } 
  else if  ((object2.y - object1.y <= distUsingHeight) &&
  (object1.y - object2.y<=distUsingHeight)){
    object2.velocityY = object2.velocityY * (-1);
    object1.velocityY = object1.velocityY * (-1);
  }

}



function detectCollision(object1, object2){

    //Get Distance Between 2 rectangle's center using width when 
  //they are touching each other from left or right
  var distUsingWidth = object1.width/2 +object2.width/2;

  //Get Distance Between 2 rectangle's center using height when 
  //they are touching each other from top or bottom
  var distUsingHeight = object1.height/2 +object2.height/2;
    //algorithm to detect if movingRect is touching with fixedRect
      
    if(/*if the rectangles are touching from left or right*/
      (object2.x-object1.x<=distUsingWidth) &&
    (object1.x-object2.x<=distUsingWidth) &&
    /*if the rectangles are touching from top or bottom */
    (object2.y - object1.y <= distUsingHeight) &&
    (object1.y - object2.y<=distUsingHeight)){
      return true;
    }
    else {
      return false;
    }
}