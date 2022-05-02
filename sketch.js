let img;
var cake;
var houseFire;
var lastQuestion;

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

  houseFire =loadAnimation(
     "Frame1.png",
     "Frame1.png",
     "Frame2.png",
     "Frame2.png",
     "Frame3.png",
     "Frame3.png",
     "Frame4.png",
     "Frame4.png",
     "Frame5.png",
     "Frame5.png"
   );
lastQuestion = loadAnimation(
  "question1.png",
  "question2.png",
  "question3.png",
  "question4.png",
  "question5.png",
  "question6.png",
  "question7.png",

);



  frannyfriend = loadImage ('Images/Franny-Frog-Chef.png');
  celina = loadImage('Images/Celina-.png');
  celinadead = loadImage('Images/CelinaDead.png');
  frannydead = loadImage('Images/FrannyDead.png');
  ingredients =loadImage('Images/ingredients.png');
  knife = loadImage('Images/Knife.png');

  {
    myFont = loadFont('GoogleFont/Poppins-Medium.ttf')
  cursorImg =loadImage('Images/HeartCursor.png');
  }
  }


 // Cake Animation

function setup() {
  createCanvas(950, 700);
  textFont(myFont);
  noCursor();

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
    case "lvl6":
    poisonedFriend();
      break;
    case "lvl7":
     gameOver ();
     break;
     case "lvl8":
     burntTongue();
      break;
     case "lvl9":
     giftCake();
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
      gameState = 'lvl6';
    }
  }

  // PreHeating Oven Question q/Q = gameWin, z/Z = gameOver
  if (gameState === "lvl3") {
    if (key === "q" || key === "Q") {
      gameState = "lvl9";
    }


    // Click F or C to select Character
  } if (gameState === "lvl3") {
    if (key === "z" || key === "Z") {
      gameState = "lvl4";
    }
  }

if (gameState === "lvl9"){
  if (key === "x" || key === "X") {
    gameState ="lvl8"
  }
}
if (gameState === "lvl9") {
  if (key === "c" || key === "C") {
    gameState ="lvl5";
  }
}

}

function titleScreen() {
  background(255, 250, 232);
  stroke(255);
  fill(255, 157, 157);
  textSize(75);
  textAlign(CENTER);
  text("Bake-A-Cake", width * 0.5, height * 0.1);
  textSize(35);
  fill(255);
  rect(800, 800, 45, 25);
  fill(255, 157, 157);
  text('Press "S" To Start Game', 450, 150);
  animation(cake, 460, 400);
  image(cursorImg, mouseX, mouseY);
}

function gameStage1() {
  background(255, 250, 232);
  noStroke();
  fill(255, 157, 157);
  textSize(45);
  textAlign(CENTER);
  text(
    "Pick a friend!",
    width * 0.5,
    height * 0.085);

    fill(255, 157, 157);
        textSize(30);
        textAlign(CENTER);
        text("Click F for Franny or C for Celina", 480, 150);
        image(cursorImg, mouseX, mouseY);

        image(celina, 500, 200);
        image(frannyfriend, 200, 215);
}

function readyToBake() {
  background(255, 250, 232);
  fill(255, 157, 157);
  textSize(45);
  textAlign(CENTER);
  text("Ready to Bake: Pick your ingredients!", 450, 45);

  textSize(35);
  textAlign(CENTER);
  text("Press A or B", 450, 100);
  noStroke();
  textSize(25);
  text("A: Flour, eggs, sugar salt, butter", 220, 200);
  text("B: Flour, water, cyanide, sugar, butter ", 680, 200);

  // These rectangles will later be replaced by artwork/images

  image(cursorImg, mouseX, mouseY);
image(ingredients, 200, 240);
}

function ovenSettings() {
  background(255, 250, 232);
  fill(255, 157, 157);
  textSize(45);
  textAlign(CENTER);
  text("How long will you preheat your oven for?", 480, 60);
  textSize(35);
  textAlign(CENTER);
  text("Q= 25 minutes   Z = 35 minutes", 500, 150);

    image(cursorImg, mouseX, mouseY);
}

function houseBurned () {

  background(255, 250, 232);
  fill(255, 157, 157);
  textSize(70);
  textAlign(CENTER, TOP);
  text("GAME OVER", 450, 5);
  textSize(45);
  textAlign(CENTER, TOP);
  text("Dang!", 450, 100)
  textSize(30);
text("You preheated the oven for too long.", 450, 180);
text("The house burned down and you died, sucker!", 450, 220);

animation(houseFire, 500, 450);

  image(cursorImg, mouseX, mouseY);
textSize(12);
  text("Refresh to play again!", 450, 260);

}

function giftCake () {
  background(255, 250, 232);
  fill(255, 157, 157);
  textSize(45);
  textAlign(CENTER);
  text("Cake is ready! Let it cool or give it now?", 480, 60);
  textSize(35);
  textAlign(CENTER);
  text("C= Let it cool!            X = Give the cake now!", 500, 150);
    image(cursorImg, mouseX, mouseY);
    animation(lastQuestion, 450, 500);
}

function burntTongue () {
  background(255, 250, 232);
  fill(255, 157, 157);
  textSize(45);
  text("GAME OVER", 350, 45);
  textAlign(CENTER);
  textSize(35);
  text("The cake was too hot", 480, 140);
  text("and your friend burnt their tongue.", 480, 180);
  text("They're now plotting your murder, cute!", 480, 220);
  textAlign(CENTER);
  textSize(20);
  text("Refresh to play again!", 480, 270);

textAlign(CENTER);
  textSize(15);
  text("#scorpioenergy", 480, 290);
  image(knife, 300, 300);


}

function poisonedFriend() {
  background(255, 250, 232);
  fill(255, 157, 157);
  textSize(80);
  textAlign(CENTER, TOP);
  text("GAME OVER", 450, 5);
  textSize(45);
  textAlign(CENTER, TOP);
  text("Your friend is dead, lol.", 450, 100)
  textSize(25);
text("Your ingredients were poisonous", 450, 200);
text("Have fun going to trial for murder!", 450, 240)

textSize(12);
text("Refresh to play again!", 450, 280);


image(celinadead, 500, 300);
image(frannydead, 200, 315);

  image(cursorImg, mouseX, mouseY);
  }

function gameWin () {
  background(255, 250, 232);
  noStroke();
  fill(255, 157, 157);
  textSize(80);
  textAlign(CENTER, TOP);
  text("YOU PASSED", 500, 40);
  textSize(35);
text("Don't think you earned a spot in the Great British ", 500, 160);
text("Baking Show just cause you won the game.", 500, 220);
textSize(25);
text("Congrats, I guess", 500, 280);

  image(cursorImg, mouseX, mouseY);
}

function gameOver() {
  background(255, 250, 232);
  noStroke();
  fill(255, 157, 157);
  textSize(75);
  textAlign(CENTER);
  text("GAME OVER", 450, 200);
  textSize(25);
  text("You suck! Lol", width * 0.5, height * 0.66);
  textSize(12);
    text("Refresh to play again!", 350, 380);



    image(cursorImg, mouseX, mouseY);
}
