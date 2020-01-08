var sounds = [
    "assets/sounds/c3.mp3",
    "assets/sounds/c3s.mp3",
    "assets/sounds/d3.mp3",
    "assets/sounds/d3s.mp3",
    "assets/sounds/e3.mp3",
    "assets/sounds/f3.mp3",
    "assets/sounds/f3s.mp3",
    "assets/sounds/g3.mp3",
    "assets/sounds/g3s.mp3",
    "assets/sounds/a3.mp3",
    "assets/sounds/a3s.mp3",
    "assets/sounds/b3.mp3"
];

var random = Math.floor(Math.random() * sounds.length);
var score = 0;

function playSound(file)
{
  var audio = new Audio(file);
  audio.play();
}


function playChord(num)
{
	var audio = new Audio(sounds[num]);
	var audio2 = new Audio(sounds[(num+4)%sounds.length]);
	var audio3 = new Audio(sounds[(num+7)%sounds.length]);
	audio.play();
	audio2.play();
	audio3.play();
}

function playRandom()
{
  var audio = new Audio(sounds[random]);
  audio.play();
}


function checkAnswer(id)
{
  if (random === Number(id)) {
    document.getElementById('correct').style.display = "block";
    document.getElementById('incorrect').style.display = "none";
    document.getElementById('next').style.display = "block";
    // document.getElementsByClassName('btn-answer').disabled = "disabled";
    score++;
  } else {
    document.getElementById('incorrect').style.display = "block";
    document.getElementById('correct').style.display = "none";
  }
}


