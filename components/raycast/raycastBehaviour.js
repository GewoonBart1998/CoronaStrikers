const people = document.getElementsByClassName('js--person');
const durationWalk = 2000;

function interactWithPeople(people){
  for(let index= 0; index < people.length; index++){
    whenDetectedRedRangeField(people[index]);
    hoverShowHand(people[index]);
    hoverHandDisappear(people[index]);
  }
}

function whenDetectedRedRangeField(person){
  person.addEventListener('click', function(event){
    try{
      let currentRange = AFRAME.utils.entity.getComponentProperty(person, 'follow.target');
      let redRange = document.getElementById('js--redRange');
      if(currentRange == redRange){
        personDisappearWithHand(this);

        return;
      }else if (getCorrectWord()) {
        setCorrectWord(false);
        personDisappearWithVoice(this);
      }
    }catch(error){
        personDisappearWithHand(this);
    }
  });
}

function disappearAnimationWithVoice(person){
  let scalingAnimation = document.createAttribute('animation');
  scalingAnimation.value = "property: scale; easing: linear; dur: " +
  durationWalk + "; to: 0 0 0";
  person.setAttribute('animation__scale', scalingAnimation.value);
  let rotationAnimation = document.createAttribute('animation');
  rotationAnimation.value = "property: rotation; easing: linear; dur: " +
  durationWalk + "; to: 0 360 0; loop: true";
  person.setAttribute('animation__rotation',  rotationAnimation.value);
}

function personDisappearWithVoice(person){
  addPoints(person, 20);
  removeFollowBehaviours(person);
  disappearAnimationWithVoice(person);
  removeEntity(person);
}

function personDisappearWithHand(person){
  addPoints(person, 40);
  removeFollowBehaviours(person);
  disappearAnimationWithHand(person);
  removeEntity(person);
}

function hoverShowHand(person){
  person.addEventListener('raycaster-intersected', function(event){
    let camera = document.getElementById('js--camera');
    camera.appendChild(createHand());
  });
}

function createHand(){
  let box = document.createElement('a-box');
  box.setAttribute('position', "0.5 0 -0.8");
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

function disappearAnimationWithHand(person){
  let att = document.createAttribute('animation');
  att.value = "property: scale; easing: linear; dur: " + durationWalk + "; to: 0 0 0";
  person.setAttribute('animation__scale', att.value);
}

function removeFollowBehaviours(person){
  person.removeAttribute('follow');
}

function removeEntity(person){
  setTimeout(function(){
      person.remove();
  }, durationWalk);
}

function getPeople(){
  return people;
}
