var score = 0;

function addPoints(person){
  let scoreboard = document.getElementById('js--score');
  score += 20;
  scoreboard.setAttribute('value', "Score: " + String(score));
}
