function addPoints(person){
  let scoreboard = document.getElementById('js--score');
  let score = 0;
  for(let index= 0; index < person.length; index++){
    person[index].addEventListener('click', function(event){
      score += 20;
      scoreboard.setAttribute('value', "Score: " + String(score));
    })
  }
}
