const durationWalk = 2000;

function interactWithPeople(person){
  whenDetectedRedRangeField(person);
  hoverShowHand(person);
  hoverHandDisappear(person);
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
  changePlaneColorOfPlayersUIWhenNeutral();
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
  let hand = document.createElement('a-obj-model');
  hand.setAttribute('src', '#hand-obj');
  hand.setAttribute('color', 'white');
  hand.setAttribute('rotation', '0 90 60');
  hand.setAttribute('position', "0.4 -0.15 -0.8");
  hand.setAttribute('id', 'js--hover');
  hand.setAttribute('scale', "0.05 0.05 0.05");

  return hand;
}

function hoverHandDisappear(person){
  person.addEventListener('raycaster-intersected-cleared', function(event){
    let hand = document.getElementById('js--hover');
    hand.remove();
  });
}

function disappearAnimationWithHand(person){
  let animation = document.createAttribute('animation');
  animation.value = "property: scale; easing: linear; dur: " + durationWalk + "; to: 0 0 0";
  person.setAttribute('animation__scale', animation.value);
}

function removeFollowBehaviours(person){
  person.removeAttribute('follow');
}

function removeEntity(person){
  setTimeout(function(){
    try{
      person.remove();
    }catch(error){}
  }, durationWalk);
}

function setDurationWalk(milliseconds){
  durationWalk = milliseconds;
}
