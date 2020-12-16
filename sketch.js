var ball,paddle;
var ballImg
var edges;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImg=loadImage("ball.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  paddle=createSprite(350,200,15,100)
  ball=createSprite(40,200,10,10);
  ball.addImage("ballImg",ballImg);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;
  ball.velocityY=9;
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
    edges=createEdgeSprites()

  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  if (ball.bounceOff(paddle)) {
    randomVelocity();
  }

  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  var rand=Math.round(random(3,8));
  ball.velocityY=rand; 
}