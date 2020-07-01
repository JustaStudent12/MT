var wall,w2,w3,w4,thick;
var bullet,b2,b3,b4,speed,weigth;
var lbullet,lwall;

function setup() {
 createCanvas(1600,700);

speed=random(223,321);
weigth=random(30,52);
thick=random(22,83);

speed2=random(223,321);
weigth2=random(30,52);
thick2=random(22,83);

speed3=random(223,321);
weigth3=random(30,52);
thick3=random(22,83);

speed4=random(223,321);
weigth4=random(30,52);
thick4=random(22,83);

bullet=createSprite(50, 200, 60, 40);
bullet.velocityX=speed;

b2=createSprite(50, 300, 60, 40);
b2.velocityX=speed;

b3=createSprite(50, 400, 60, 40);
b3.velocityX=speed;

b4=createSprite(50, 500, 60, 40);
b4.velocityX=speed;

 wall=createSprite(1200,200,thick,90);
 w2=createSprite(1200,300,thick2,90);
 w3=createSprite(1200,400,thick3,90);
 w4=createSprite(1200,500,thick4,90);
}

function draw() {
  background(255,255,255);  
 
  if (collide(bullet,wall)) {
    bullet.velocityX=0;
    var d=0.5*weigth*speed*speed/(thick*thick*thick);

    if (d>10) {
      wall.shapeColor=color(255,0,0);
    }
   
    if (d<10) {
      wall.shapeColor=color(0,255,0);
    }
  }

  if (collide(b2,w2)) {
    b2.velocityX=0;
    var d=0.5*weigth2*speed2*speed2/(thick2*thick2*thick2);

    if (d>10) {
      w2.shapeColor=color(255,0,0);
    }
   
    if (d<10) {
      w2.shapeColor=color(0,255,0);
    }
  }

  if (collide(b3,w4)) {
    b4.velocityX=0;
    var d=0.5*weigth3*speed3*speed3/(thick3*thick3*thick3);

    if (d>10) {
      w4.shapeColor=color(255,0,0);
    }
   
    if (d<10) {
      w4.shapeColor=color(0,255,0);
    }
  }

  if (collide(b3,w3)) {
    b3.velocityX=0;
    var d=0.5*weigth4*speed4*speed4/(thick4*thick4*thick4);

    if (d>10) {
      w3.shapeColor=color(255,0,0);
    }
   
    if (d<10) {
      w3.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}
function collide(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge) {
    return true;
}

    return false;
}

