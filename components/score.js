var score = 0;

AFRAME.registerComponent('damage', {
  schema:{
    depletion: {type: 'string', default: "No Damage"}
  },

  update: function(oldData){
    if(this.data.depletion == "Remove Heart"){
      depleteHearts();
    }
  }
});

function addDamageComponent(follower, depletion){
  follower.setAttribute('damage', depletion);
}

function addPoints(person, value){
  let scoreboard = document.getElementById('js--score');
  score += value;
  scoreboard.setAttribute('value', "Score: " + String(score));
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
