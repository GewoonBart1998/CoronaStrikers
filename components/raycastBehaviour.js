const durationWalk = 2000;
const people = document.getElementsByClassName('js--person');

function interactWithPeople(people){
  for(let index= 0; index < people.length; index++){
    personDisappear(people[index]);
    hoverShowHand(people[index]);
    hoverHandDisappear(people[index]);
  }
}

function personDisappear(person){
  person.addEventListener('click', function(event){
    removeFollowBehaviours(this);
    disappearAnimation(this);
    //removeEntity(this);
  });
}

function hoverShowHand(person){
  person.addEventListener('raycaster-intersected', function(event){
    let camera = document.getElementById('js--camera');
    camera.appendChild(createHand());
  });
}

function createHand(){
  let box = document.createElement('a-box');
  box.setAttribute('position', "0 0 -0.8");
  box.setAttribute('color', "yellow");
  box.setAttribute('id', 'js--hover');
  box.setAttribute('scale', "0.1 0.1 0.1");

  return box;
}

function hoverHandDisappear(person){
  person.addEventListener('raycaster-intersected-cleared', function(event){
    let box = document.getElementById('js--hover');
    box.remove();
  });
}

function disappearAnimation(person){
  let att = document.createAttribute('animation');
  att.value = "property: scale; easing: linear; dur: " + durationWalk + "; to: 0 0 0";
  person.setAttribute('animation__walk', att.value);
  console.log("test");
}

function removeFollowBehaviours(person){
  person.classList.remove('js--follow');
  person.removeAttribute('follow');
}

function removeEntity(person){
  person.remove();
}

function getPeople(){
  return people;
}
