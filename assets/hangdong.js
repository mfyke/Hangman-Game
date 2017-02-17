window.onload = start;
var answers = ["Genji", "McCree", "Pharah", "Reaper", "Soldier76", "Sombra", "Tracer", "Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker", "DVa", "Reinhardt", "Roadhog", "Winston", "Zarya", "Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta"];
var guessed = [];
var lives = 7;
var wins = 0;
var randWord="";
var randNum;
var wordDisplayed="";
function wordSelect () {
	randNum=Math.floor(Math.random()*23);
	randWord=answers[randNum];
}

function displayWord () {
	for (var i=0; i<randWord.length; i++) {
		wordDisplayed += "-";
	}	
	document.getElementById('dicksuck').innerHTML=wordDisplayed;
}

function guessing () {
	if (guessed.indexOf(event.key)>-1) {
		//do meth	
	}
	else if (randWord.toLowerCase().indexOf(event.key) > -1) {
		for (var j=0; j<randWord.length; j++) {
			if(event.key===randWord.toLowerCase().charAt(j)) {
				wordDisplayed = wordDisplayed.substr(0,j) + randWord.charAt(j) + wordDisplayed.substr(j+1); 
				document.getElementById('dicksuck').innerHTML=wordDisplayed;
			}
		}
	}
	else {
		guessed.push(event.key);
		lives -= 1;
		document.getElementById('guezzed').innerHTML=guessed; 
	}
}

function charlieSheen () {
	if (randWord===wordDisplayed) {
		var audio = new Audio('assets/sounds/win' + randNum + '.ogg');
		audio.play();
		document.getElementById('dickPic').src='assets/images/' + randNum + '.png';
		document.getElementById('result').innerHTML="You Win!";
		wins += 1;
		document.getElementById('wins').innerHTML=wins;
		winner();
		winButton();
	}
}

function chandler () {
	if (lives===0) {
		var audio = new Audio('assets/sounds/lose' + randNum + '.ogg');
		audio.play();
		document.getElementById('dickPic').src='assets/images/' + randNum + '.png';
		document.getElementById('result').innerHTML="You Lose!";
		wins=0;
		winner();
		winButton();
		document.getElementById('wins').innerHTML=wins;
	}
}

function start () {
	wordDisplayed="";
	wordSelect();
	displayWord();
	lives=7;
	guessed=[];
	document.getElementById('guezzed').innerHTML=guessed;
	document.getElementById('dickPic').src='assets/images/overwatchlogo.png';
	document.getElementById('lives').innerHTML=lives;
	document.getElementById('result').innerHTML="Overwatch Hangman";
	document.getElementById('playAgain').style.display="none";
	document.getElementById('boner').style.display="initial";
}

document.onkeyup=function() {
	guessing();
	charlieSheen();
	chandler();
	document.getElementById('lives').innerHTML=lives;
};
function winner () {
	document.getElementById('boner').style.display="none";
}
function winButton () {
	document.getElementById('playAgain').style.display="block";
}