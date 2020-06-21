var score = 0;

function addPoints(person, value){
  let scoreboard = document.getElementById('js--score');
  score += value;
  scoreboard.setAttribute('value', "Score: " + String(score));
}

function addDamageComponent(follower, depletion){
  follower.setAttribute('damage', depletion);
}

function setDamageComponentToHeartRemoval(element){
  if(element.hasAttribute('damage')){
    addDamageComponent(element, 'depletion: Remove Heart');
  }
}

function depleteHearts(){
  let heart = document.getElementsByClassName('heart');
  if(heart[heart.length - 1] != undefined){
    heart[heart.length -1].remove();
    if(heart.length == 0){
      stopSpawner();
    }
  }
}
