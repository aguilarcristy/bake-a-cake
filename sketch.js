let img;
var cake;
let gameState = "title";
let canvas;
let bgR = (255, 247, 189);
var myFont;

function preload() {
  cake = loadAnimation(
    "cake1.png",
    "cake3.png",
    "cake2.png",
    "cake4.png",
    "cake5.png",
    "cake6.png",
    "cake7.png",
    "cake7.png"
  );

  myFont = loadFont('GoogleFont/Poppins-Medium.ttf')

} // Cake Animation

function setup() {
  createCanvas(950, 800);
  textFont(myFont);
}

function draw() {
  background(255, 250, 232);
  switch (gameState) {
    case "title":
      titleScreen();
      break;
    case "lvl1":
      gameStage1();
      break;
    case "lvl2":
      readyToBake();
      break;
    case "lvl3":
      ovenSettings();
      break;
      case "lvl4":
      houseBurned();
      break;
    case "lvl5":
      gameWin();
      break;
    case "gameOver":
      gameOver();
      break;
  }
}

function keyReleased() {

  // Click S to Start Game
  if (gameState === "title") {
    if (key === "s" || key === "S") {
      gameState = "lvl1";
    }

    // Click F or C to select Character
  } else if (gameState === "lvl1") {
    if (key === "f" || key === "c") {
      gameState = "lvl2";
    }
  }

  // Pick Ingredients a/A = Nxt Lvl, b/B = gameOver

  if (gameState === "lvl2") {
    if (key === 'a' || key === 'A') {
      gameState = 'lvl3';
    }
  }
   if (gameState === "lvl2") {
    if (key === 'b' || key === 'B') {
      gameState = 'gameOver';
    }
  }

  // PreHeating Oven Question q/Q = gameWin, z/Z = gameOver
  if (gameState === "lvl3") {
    if (key === "q" || key === "Q") {
      gameState = "lvl5";
    }

    // Click F or C to select Character
  } if (gameState === "lvl3") {
    if (key === "z" || key === "Z") {
      gameState = "lvl4";
    }
  }
}

function titleScreen() {
  background(255, 250, 232);

  stroke(255);
  fill(255, 219, 206);
  textSize(75);
  textAlign(CENTER);
  text("Bake-A-Cake", width * 0.5, height * 0.1);
  textSize(25);
  fill(255);
  rect(800, 800, 45, 25);
  fill(255, 219, 206);
  text('Press "S" To Start Game', width * 0.5, height * 0.85);
  animation(cake, 460, 400);
}

function gameStage1() {
  background(255, 250, 232);
  noStroke();
  fill(255, 219, 206);
  textSize(30);
  textAlign(CENTER);
  text(
    "Pick a friend! Click f for Franny or c for Celina",
    width * 0.5,
    height * 0.1
  );
}

function readyToBake() {
  background(255, 250, 232);
  fill(255, 219, 206);
  textSize(50);
  textAlign(CENTER);
  text("Ready to Bake: Pick your ingredients!", width * 0.5, height * 0.1);

  textSize(25);
  textAlign(CENTER);
  text("Click A or B", width * 0.5, height * 0.3);
  noStroke();
  text("A: Flour, eggs, sugar salt, butter", 180, 390);
  text("B: Flour, water, cyanide, sugar, butter ", 640, 390);

  // These rectangles will later be replaced by artwork/images

  rect(160, 400, 70, 70);
  rect(600, 400, 70, 70);

}

function ovenSettings() {
  background(255, 250, 232);
  fill(255, 219, 206);
  textSize(50);
  textAlign(CENTER);
  text("How long will you preheat your oven for?", width * 0.5, height * 0.1);
  textSize(25);
  textAlign(CENTER);
  text("q= 25 minutes, z = 35 minutes", 500, 500);
}

function houseBurned () {

  background(255, 250, 232);
  fill(255, 219, 206);
  textSize(25);
  textAlign(CENTER);
  text("Dang! You preheated the oven for too long, so the house burned down! You died!", width * 0.5, height * 0.1);}

function gameWin () {
   background(255, 250, 232);
  noStroke();
  fill(255, 219, 206);
  textSize(75);
  textAlign(CENTER);
  text("YOU PASSED", width * 0.5, height * 0.33);
  textSize(12);
  text("Don't think you earned a spot in the Great British Baking Show just cause you won the game.", width * 0.5, height * 0.66);
}
function gameOver() {
  background(255, 250, 232);
  noStroke();
  fill(255, 219, 206);
  textSize(75);
  textAlign(CENTER);
  text("GAME OVER", width * 0.5, height * 0.33);
  textSize(25);
  text("You suck! Lol", width * 0.5, height * 0.66);
}
