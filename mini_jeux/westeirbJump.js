var persoSize = 70;
var persoX;
var persoY;
var speed;
var speedCote = 6;
var ptfX = 70;
var ptfY = 15;
var monsterX = 80;
var monsterY = 35;
var iconSize = 80;
var maxPtf = 5;
var ptfList = [];
var mstList = [];
var iconList = [];
var platYChange = 0;
var started;
var score = 0;
var highScore = 0;
var persoImg;
var platformImg;
var platformImgOld
var monsterDeuxImg;
var monsterUnImg;
var monsterTroisImg;
var monsterQuatreImg;
var backgroundImg;
var persounImg;
var persodeuxImg;
var persotroisImg;
var mstPossible = true;
var westernFont;
var typePerso="";
var monstre="";
var platacreerList = [];
var son;


function preload() {
  backgroundImg = loadImage("mini_jeux/image/background.jpg");
  persoImg = loadImage("mini_jeux/image/texasWalker.png");
  platformImg = loadImage("mini_jeux/image/bois.png");
  platformImgOld = loadImage("mini_jeux/image/bois2.png");
  monsterUnImg = loadImage("mini_jeux/image/monstreun.png");
  monsterDeuxImg = loadImage("mini_jeux/image/monstredeux.png");
  monsterTroisImg = loadImage("mini_jeux/image/monstretrois.png");
  monsterQuatreImg = loadImage("mini_jeux/image/monstrequatre.png");
  persounImg = loadImage("mini_jeux/image/blaise.png");
  persodeuxImg = loadImage("mini_jeux/image/leonbis.png");
  persotroisImg = loadImage("mini_jeux/image/ln.png");
  westernFont = loadFont("font/west.TTF");
  //son=loadSound("mini_jeux/sons/son.mp3");
}

function Platform(ptfPosY) {
  this.xPos = random(15, 300);
  this.yPos = ptfPosY;
  this.width = ptfX;
  this.height = ptfY;
  this.nbSaut=0;
}

function Monstre(ptfPosY) {
  this.xPos = random(15, 300);
  this.yPos = ptfPosY;
  this.width = monsterX;
  this.height = monsterY;
}

function Icon(x,y) {
  this.xPos = x;
  this.yPos = y;
  this.width = iconSize;
  this.height = iconSize;

  this.clicked = function(){
  }
}


function setup() {
  createCanvas(400, 600);
  frameRate(60);
  started = false;
}

function draw() {
  image(backgroundImg, 0, 0, 400, 600);
  if(started) {
    jeu();
  } else {
    menu();
  }
}


function level(){
  if(mstPossible){
    if(score%500==0){
      hardcorefour();
      mstPossible =false;
    }
    else if(score%100==0){
      hardcorethree();
      mstPossible = false;
    }
    else if(score%50==0){
      hardcoretwo();
      mstPossible = false;
    }
    else if(score%10==0){
      hardcoreone();
      mstPossible = false;
    }
  }
 
    
}


function hardcoreone(){
    var mst = new Monstre(15);
    monstre="un";
    mstList.push(mst);
    mstList.forEach(function(mst) {
      // move all platforms down
      mst.yPos += platYChange;
      image(monsterUnImg, mst.xPos, mst.yPos, mst.width, mst.height);
  
      if(mst.yPos > 600) {
        score++;
        mstList.pop();
      }
  });
}

function hardcoretwo(){
  var mst = new Monstre(15);
  monstre="deux";
    mstList.push(mst);
    mstList.forEach(function(mst) {
      // move all platforms down
      mst.yPos += platYChange;
      image(monsterDeuxImg, mst.xPos, mst.yPos, mst.width, mst.height);
  
      if(mst.yPos > 600) {
        score++;
        mstList.pop();
      }
  });
}

function hardcorethree(){
  var mst = new Monstre(15);
  monstre="trois";
    mstList.push(mst);
    mstList.forEach(function(mst) {
      // move all platforms down
      mst.yPos += platYChange;
      image(monsterTroisImg, mst.xPos, mst.yPos, mst.width, mst.height);
  
      if(mst.yPos > 600) {
        score++;
        mstList.pop();
      }
  });
}

function hardcorefour(){
  var mst = new Monstre(15);
  monstre="quatre";
    mstList.push(mst);
    mstList.forEach(function(mst) {
      // move all platforms down
      mst.yPos += platYChange;
      image(monsterQuatreImg, mst.xPos, mst.yPos, mst.width, mst.height);
  
      if(mst.yPos > 600) {
        score++;
        mstList.pop();
      }
  });
}


function jeu(){
  drawPlatforms();
  drawDoodler(typePerso);
  drawMonsters(monstre);
  checkCollision();
  moveDoodler();
  moveScreen();
  updateScore();
  level();
}


function menu(){
  fill(0);
  textSize(30);

  textFont(westernFont);
  text("WestJump", 140, 50);
  textSize(30);
  text("Choisir un personnage" , 80, 250);
  image(persounImg, 70,270, 80, 80);
  image(persodeuxImg, 160,270, 80, 80);
  image(persotroisImg, 250,270, 80, 80);
  textSize(20);
  text("Record  : " + highScore, 160, 400);

  iconList.unshift(new Icon(70,270));
  iconList.unshift(new Icon(160,270));
  iconList.unshift(new Icon(250,270));

}

////////////////EVENTS///////////////////////

function touchMoved() {   // Move gray circle
  if(started){
    persoX = mouseX;
  }
}

// Start Game
function mousePressed() {
  if(!started){
    if (
      mouseX > 90  &&
      mouseX < 90 +80 &&
      mouseY > 270 &&
      mouseY < 270 +80
    ) {
      typePerso="un";
      score = 1;
      setupPlatforms();
      persoY = 100;
      persoX = ptfList[ptfList.length - 1].xPos + 15;
      speed = 0.1;
      started = true;
      /*son.play();
      son.jump(14);*/
    }
    else if (
      mouseX > 160  &&
      mouseX < 160 +80 &&
      mouseY > 270 &&
      mouseY < 270 +80
    ) {
      typePerso="deux";
      score = 1;
      setupPlatforms();
      persoY = 100;
      persoX = ptfList[ptfList.length - 1].xPos + 15;
      speed = 0.1;
      started = true;
     /* son.play();
      son.jump(14);*/
    }
    else if (
      mouseX > 220  &&
      mouseX < 220 +80 &&
      mouseY > 270 &&
      mouseY < 270 +80
    ) {
      typePerso="trois";
      score = 1;
      setupPlatforms();
      persoY = 100;
      persoX = ptfList[ptfList.length - 1].xPos + 15;
      speed = 0.1;
      started = true;
      /*son.play();
      son.jump(14);*/
    }
  }
}


/////////////////////////////////////////



function updateScore(){
  textSize(20);
  text("Score : " + score, 145, 20);
}


function moveScreen() {
  if(persoY < 250) {
    platYChange = 3;
    speed += 0.25;
  } else {
    platYChange = 0;
  }
}



// ===========================
//  Doodler
// ===========================
function drawDoodler(perso) {
  switch (perso){
    case "un":
      image(persounImg, persoX, persoY, persoSize, persoSize);
      break;
    case "deux":
      image(persodeuxImg, persoX, persoY, persoSize, persoSize);
      break;
    case "trois":
      image(persotroisImg, persoX, persoY, persoSize, persoSize);
      break;
    default :
      image(persoImg, persoX, persoY, persoSize, persoSize);
      break;
  }
  
}

function moveDoodler() {
  // doodler falls with gravity
  speed += 0.2;
  persoY += speed;

  if (keyIsDown(LEFT_ARROW)) {
    persoX -= speedCote;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    persoX += speedCote;
  }
}

// ===========================
//  Platforms
// ===========================
function setupPlatforms() {
  for(var i=0; i < maxPtf; i++) {
    var platGap =  random (100, height / maxPtf);
    var ptfPosY
 = i * platGap;
    var plat = new Platform(ptfPosY
  );
    ptfList.push(plat);
  }
}

function drawPlatforms() {
  ptfList.forEach(function(plat) {
    // move all platforms down
    plat.yPos += platYChange;
    if(plat.nbSaut == 0){
      image(platformImg, plat.xPos, plat.yPos, plat.width, plat.height);
    }else{
      image(platformImgOld, plat.xPos, plat.yPos, plat.width, plat.height);
    }

    if(plat.yPos > 600) {
      score++;
      ptfList.pop();
      var newPlat = new Platform(0);
      ptfList.unshift(newPlat); // add to front
    }
    // plat.xPos++; TODO faisaible
  });
}

function drawMonsters(monstre) {
  mstList.forEach(function(mst) {
    mst.yPos += platYChange;
    switch (monstre){
      case "un":
        image(monsterUnImg, mst.xPos, mst.yPos, mst.width, mst.height);
        break;
      case "deux":
        image(monsterDeuxImg, mst.xPos, mst.yPos, mst.width, mst.height);
        break;
      case "trois":
        image(monsterTroisImg, mst.xPos, mst.yPos, mst.width, mst.height);
        break;
      case "quatre":
        image(monsterQuatreImg, mst.xPos, mst.yPos, mst.width, mst.height);
        break;
      default :
        break;
    }
    if(mst.yPos > 600) {
      score++;
      mstList.pop();
      mstPossible = true;
    }
  });
}





// ===========================
//  Collisions
// ===========================
function checkCollision() {
  ptfList.forEach(function(plat, index) {
    var tmp= plat.yPos;
    if(
      persoX < plat.xPos + plat.width &&
      persoX + persoSize > plat.xPos &&
      persoY + persoSize < plat.yPos + plat.height &&
      persoY + persoSize > plat.yPos &&
      speed > 0
    ) {
      speed = -10;
      plat.nbSaut++;
    }
    if(plat.nbSaut == 2){
      ptfList.splice(index, 1);
      var newPlat = new Platform(-(600-tmp));
      ptfList.unshift(newPlat);
    }
  });

  mstList.forEach(function(mst) {
    if(
      persoX < mst.xPos + mst.width &&
      persoX + persoSize > mst.xPos &&
      persoY + persoSize < mst.yPos + mst.height &&
      persoY + persoSize > mst.yPos &&
      speed > 0
    ) {
      speed = -8;
      mstList.pop();
      mstPossible = true;
    }else if( 
      persoX < mst.xPos + mst.width &&
      persoX + persoSize > mst.xPos &&
      persoY < mst.yPos + mst.height &&
      persoY + persoSize > mst.yPos &&
      speed > 0){
       endGame();
    }
  });
  
  if(persoY > height) {
    if(score > highScore) {
      highScore = score;
    }
    endGame();
  }
  
  // screen wraps from left to right
  if(persoX < -persoSize) {
    persoX = width;
  } else if(persoX > width) {
    persoX = -persoSize;
  }
 

}


function endGame() {
  started = false;
  ptfList = [];
  mstList = [];
  mstPossible = true;
  iconList = [];
  /*son.stop();*/

}



