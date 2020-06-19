var score = 0;

function addPoints(person, value){
  let scoreboard = document.getElementById('js--score');
  score += value;
  scoreboard.setAttribute('value', "Score: " + String(score));
}
