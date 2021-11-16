var monkey, monkey_running;
var banana, bananaImage, bGrp;
var obstacle, obstacleImage, obstacleGroup;
var FoodGroup;
var score;
var ground;
var ig;
var surT = 0;

function preload() {
  monkey_running = loadAnimation(
    "sprite_0.png",
    "sprite_1.png",
    "sprite_2.png",
    "sprite_3.png",
    "sprite_4.png",
    "sprite_5.png",
    "sprite_6.png",
    "sprite_7.png",
    "sprite_8.png"
  );

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  monkey = createSprite(50, 100, 100, 100);
  monkey.addAnimation("monkeyAni", monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(200, 400, 650, 50);
  ground.velocityX = -7;

  ig = createSprite(200, 410, 650, 50);
  //ig.visible=false;

  bGrp = new Group();

  ground.velocityX = -(6 + (3 * surT) / 100);
}

function draw() {
  background("turquoise");

  if (keyDown("space")) {
    monkey.velocityY = -4   ;
  }

  
  monkey.velocityY = monkey.velocityY + 0.2;
  monkey.collide(ig);

  if (frameCount % 80 === 0) {
    var banana = createSprite(350, 50, 50, 50);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 100;
    bGrp.add(banana);
  }
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  surT = surT + Math.round(getFrameRate() / 60);
  text("Survival Time: " + surT, 30, 50);
  drawSprites();
}

function Obstacle() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(250, 150, 50, 50);
    obstacle.y = Math.round(random(120, 200));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
  }
}
