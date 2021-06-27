var background, backgroundImg;
var iss, issImg;
var capsule;
var capsule1Img, capsule2Img, capsule3Img, capsule4Img;
var hasDocked = false;

function preload() {
  backgroundImg = loadImage("Docking-undocking/spacebg.jpg");
  issImg = loadImage("Docking-undocking/iss.png");
  capsule1Img = loadImage("Docking-undocking/spacecraft1.png");
  capsule2Img = loadImage("Docking-undocking/spacecraft2.png");
  capsule3Img = loadImage("Docking-undocking/spacecraft3.png");
  capsule4Img = loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(1301, 705);
  
  // creating background
  background = createSprite();
  background.addImage(backgroundImg);
  background.scale = 4;

  // creating the capsule
  capsule = createSprite(Math.round(random(80,1100)), 550, 10, 10);
  capsule.addImage(capsule1Img);
  capsule.scale = 0.5;

  // creating iss sprite
  iss = createSprite(700, 300, 10, 10);
  iss.addImage(issImg);
}

function draw() {
  // background(background);

  if(hasDocked === false) {
    // setting random x position for the capsule
    capsule.x = capsule.x + random(-1,1);
    
    if(keyDown(UP_ARROW) || keyDown("w")) {
      capsule.addImage(capsule2Img);
      capsule.y -= 2;

    }

    if(keyDown(LEFT_ARROW) || keyDown("a")) {
      capsule.addImage(capsule4Img);
      capsule.x -= 2;
    }

    if(keyDown(DOWN_ARROW) || keyDown("s")) {
      capsule.addImage(capsule1Img);
      // capsule.y += 2;
    }

    if(keyDown(RIGHT_ARROW) || keyDown("d")) {
      capsule.addImage(capsule3Img);
      capsule.x += 2;
    }

    console.log(capsule.x);
    console.log(capsule.y);

    if(capsule.x > 615 && capsule.x < 630 && capsule.y < 500 && capsule.y > 495) {
      hasDocked = true;
    }

    drawSprites();
  }

  if(hasDocked === true) {
    textSize(30);
    fill("white");
    text("Docking Successful!", 225, 600);
  }
}