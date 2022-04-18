let img;
var cake;
let gameState = "title";
let canvas;
let bgR = (255, 247, 189);

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

  img = loadImage("Celina.jpg", "Froggy.jpg");
} // Cake Animation

function setup() {
  createCanvas(900, 900);
  image(img, 0, 0);
}

function draw() {
  background(255, 247, 189);
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
    case "gameover":
      gameOver();
      break;
  }
}

function keyReleased() {
  // Click S to Start Game
  if (gameState === "title" || gameState === "titleScreen") {
    if (key === "s" || key === "S") {
      gameState = "lvl1";
    }

    // Click F or C to select Character
  } else if (gameState === "lvl1") {
    if (key === "f" || key === "c") {
      gameState = "lvl2";
    }
  }

  // Pick Wrong Ingredients
  if (gameState === "lvl2" || gameState === "readyToBake") {
    if (key === "a" || key === "A") {
      gameState = "lvl3";
    }
  } else if (gameState === "readyToBake") {
    if (key === "b" || key === "B") {
      gameState = "gameover";
    }
  }
}

function titleScreen() {
  background(255, 247, 189);

  stroke(255);
  fill(255, 128, 128);
  textSize(75);
  textAlign(CENTER);
  text("Bake-A-Cake", width * 0.5, height * 0.1);
  textSize(25);
  text('Press "S" To Start Game', width * 0.5, height * 0.85);
  animation(cake, 450, 450);
}

function gameStage1() {
  background(255, 247, 189);
  noStroke();
  fill(255, 128, 128);
  textSize(30);
  textAlign(CENTER);
  text(
    "Pick a friend! Click f for Franny or c for Celina",
    width * 0.5,
    height * 0.1
  );
}

function readyToBake() {
  background(255, 247, 189);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("Ready to Bake: Pick your ingredients!", width * 0.5, height * 0.1);

  textSize(25);
  textAlign(CENTER);
  text("Click A or B", width * 0.5, height * 0.3);
  noStroke();
  text("A", 220, 390);
  text("B", 620, 390);

  // These rectangles will later be replaced by artwork/images

  rect(200, 400, 70, 70);
  rect(600, 400, 70, 70);
}

function ovenSettings() {
  background(255, 247, 189);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("How long will you preheat your oven for?", width * 0.5, height * 0.1);
  textSize(25);
  textAlign(CENTER);
  text("Click A or B", 500, 500);
}

 
function gameOver() {
  background(255, 247, 189);
  noStroke();
  fill(255, 128, 128);
  textSize(75);
  textAlign(CENTER);
  text("GAME OVER", width * 0.5, height * 0.33);
  textSize(25);
  text("You suck! Lol", width * 0.5, height * 0.66);
}
