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
  let box = document.createElement('a-obj-model');
  box.setAttribute('src', '#hand-obj');
  box.setAttribute('color', 'white');
  box.setAttribute('rotation', '0 90 60');
  box.setAttribute('position', "0.4 -0.15 -0.8");
  box.setAttribute('id', 'js--hover');
  box.setAttribute('scale', "0.05 0.05 0.05");

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
    try{
      person.remove();
    }catch(error){}
  }, durationWalk);
}
