var screen = document.getElementById("screen");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var debug = document.getElementById("debug");
var stones = 0;

function kill() {
  screen.innerHTML = "STONE HER!";
  btn1.innerHTML = "Throw rocks";
  btn1.onclick = function() {stoned();}
btn2.innerHTML = "Collect rocks";
  btn2.onclick = function() {takeem();}
}

function run() {
  screen.innerHTML = "Bruno or Maple?";
  btn1.innerHTML = "Bruno";
  btn1.onclick = function () {bruno()};
    btn2.innerHTML = "Maple";
  btn2.onclick = function () {maple()};
}

function stoned() {
  debug.innerHTML = "Thrown";
  if (stones == 1) {
    screen.innerHTML = "SHE'S TOO POWERFUL!";
      btn1.innerHTML = "Continue";
  btn1.onclick = function () {run()};
  }
  if (stones == 2) {
    screen.innerHTML = "SHE'S TOO POWERFUL!"
      btn1.innerHTML = "Continue";
  btn1.onclick = function () {run()};
  }
  if (stones == 3) {
    screen.innerHTML = "DING DONG!  SHE'S DEAD!"
      btn1.innerHTML = "Continue";
  btn1.onclick = function () {win()};
  }
  if (stones == 4) {
    screen.innerHTML = "DING DONG!  SHE'S DEAD!"
      btn1.innerHTML = "Continue";
  btn1.onclick = function () {win()};
  }
  if (stones == 5) {
    screen.innerHTML = "DING DONG!  SHE'S DEAD!"
      btn1.innerHTML = "Continue";
  btn1.onclick = function () {win()};
  }

  stones = 0;
}
function takeem() {
  stones = stones+1;
  debug.innerHTML = stones;
}
function bruno() {
  screen.innerHTML = "Dig or Fly?";
  btn1.innerHTML = "Dig";
  btn1.onclick = function () {digprep()};
    btn2.innerHTML = "Fly";
  btn2.onclick = function () {flybrunoprep()};
}
function maple() {
 screen.innerHTML = "Dig or Fly?";
  btn1.innerHTML = "Dig";
  btn1.onclick = function () {digprep()};
    btn2.innerHTML = "Fly";
  btn2.onclick = function () {flymapleprep()}; 
}
function digprep() {
  screen.innerHTML = "Dig";
  btn1.innerHTML = "go";
  btn1.onclick = function() {dig()}
    btn2.innerHTML = "dig";
  btn2.onclick = function() {takeem()};
}
function flymapleprep() {
  screen.innerHTML = "Fly";
  btn1.innerHTML = "soar";
  btn1.onclick = function() {flymaple()}
    btn2.innerHTML = "flap";
  btn2.onclick = function() {takeem()};
}
function flybrunoprep() {
  screen.innerHTML = "Fly";
  btn1.innerHTML = "soar";
  btn1.onclick = function() {flybruno()}
    btn2.innerHTML = "flap";
  btn2.onclick = function() {takeem()};
}
function dig() {
	debug.innerHTML = "Dig";
  if (stones == 1) {
    screen.innerHTML = "Why are you digging in here?!"
      btn1.innerHTML = "Punished";
  btn1.onclick = function () {die()};
  }
  if (stones == 2) {
    screen.innerHTML = "Why are you digging in here?!"
      btn1.innerHTML = "Punished";
  btn1.onclick = function () {die()};
  }
  if (stones == 3) {
    screen.innerHTML = "Why are you digging in here?!"
      btn1.innerHTML = "Punished";
  btn1.onclick = function () {die()};
  }
  if (stones == 4) {
    screen.innerHTML = "YAY!"
      btn1.innerHTML = "Continue";
  btn1.onclick = function () {win()};
  }
  if (stones == 5) {
    screen.innerHTML = "YAY!"
      btn1.innerHTML = "Continue";
  btn1.onclick = function () {win()};
  }
  stones = 0;
}
function flybruno() {
	debug.innerHTML = "Fly";
  if (stones == 1) {
    screen.innerHTML = "Freaking birds!"
      btn1.innerHTML = "You are shot down with a rifle";
  btn1.onclick = function () {die()};
  }
  if (stones == 2) {
    screen.innerHTML = "Freaking birds!"
      btn1.innerHTML = "You are shot down with a rifle";
  btn1.onclick = function () {die()};
  }
  if (stones == 3) {
    screen.innerHTML = "Freaking birds!"
      btn1.innerHTML = "You are shot down with a rifle";
  btn1.onclick = function () {die()};
  }
  if (stones == 4) {
    screen.innerHTML = "Where to go next?"
      btn1.innerHTML = "Hide from the Helios";
  btn1.onclick = function () {hide()};
  }
  if (stones == 5) {
    screen.innerHTML = "Where to go next?"
      btn1.innerHTML = "Hide from the Helios";
  btn1.onclick = function () {hide()};
  }
  stones = 0;
}
function flymaple() {
	debug.innerHTML = "Fly";
  if (stones == 1) {
    screen.innerHTML = "Freaking birds!"
      btn1.innerHTML = "You are shot down with a rifle";
  btn1.onclick = function () {die()};
  }
  if (stones == 2) {
    screen.innerHTML = "Freaking birds!"
      btn1.innerHTML = "You are shot down with a rifle";
  btn1.onclick = function () {die()};
  }
  if (stones == 3) {
    screen.innerHTML = "Freaking birds!"
      btn1.innerHTML = "You are shot down with a rifle";
  btn1.onclick = function () {die()};
  }
  if (stones == 4) {
    screen.innerHTML = "I see Mermaids"
      btn1.innerHTML = "Follow";
  btn1.onclick = function () {win()};
  }
  if (stones == 5) {
    screen.innerHTML = "I see Mermaids"
      btn1.innerHTML = "Follow";
  btn1.onclick = function () {win()};
  }
  stones = 0;
}

function hide() {
  screen.innerHTML = "She's back...STONE HER!";
  btn1.innerHTML = "Throw rocks";
  btn1.onclick = function() {stone2()}
    btn2.innerHTML = "Collect rocks";
  btn2.onclick = function() {takeem()};
}

function stone2() {
	debug.innerHTML = "Thrown";
  if (stones == 1) {
    screen.innerHTML = "SHE'S TOO POWERFUL!"
      btn1.innerHTML = "You get brutally murdered";
  btn1.onclick = function () {die()};
  }
  if (stones == 2) {
    screen.innerHTML = "SHE'S TOO POWERFUL!"
      btn1.innerHTML = "You get brutally murdered";
  btn1.onclick = function () {die()};
  }
  if (stones == 3) {
    screen.innerHTML = "DING DONG!  SHE'S DEAD!"
      btn1.innerHTML = "You get dinner";
  btn1.onclick = function () {win()};
  }
  if (stones == 4) {
    screen.innerHTML = "DING DONG!  SHE'S DEAD!"
      btn1.innerHTML = "You get dinner";
  btn1.onclick = function () {win()};
  }
  if (stones == 5) {
    screen.innerHTML = "DING DONG!  SHE'S DEAD!"
      btn1.innerHTML = "You get dinner";
  btn1.onclick = function () {win()};
  }
  stones = 0;
}
function win() {
  screen.innerHTML = "A WINNER IS YOU!";
  btn1.innerHTML = "Play Again?";
  btn1.onclick = function() {kill()}
    }
    function die() {
  screen.innerHTML = "UR A DEAD";
  btn1.innerHTML = "Play Again?";
  btn1.onclick = function() {kill()}
    }