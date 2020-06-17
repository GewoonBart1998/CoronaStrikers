const orangeRange = document.getElementById('js--orangeRange');
const redRange = document.getElementById('js--redRange');
var person = document.getElementsByClassName('js--person');
var follow = document.getElementsByClassName('js--follow');

function attachFollowToPerson(person){
  for(let index= 0; index < person.length; index++){
    personGoesToOrangeRange(person[index]);
  }
}

function personGoesToOrangeRange(person){
  person.setAttribute('follow', {
    target: '#js--orangeRange',
    speed: 1
  });
}

function personGoesToRedRange(person){

  if(person.classList.contains('js--person')){
    person.setAttribute('follow', {
      target: '#js--redRange',
      speed: 1
    });
    person.classList.remove("js--person");
  }
}

function getPerson(){
  return person;
}

function getFollow(){
  return follow;
}

function getRedRange(){
  return redRange;
}

function getOrangeRange(){
  return orangeRange;
}
