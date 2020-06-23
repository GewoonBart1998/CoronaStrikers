var orangeRangeSpeed = 0.5;
var redRangeSpeed = 1;

function changeFollowDestination(follower){
  if(follower.hasAttribute('range')){
    if(!follower.hasAttribute('follow')){
      setTimeout(function(){
        followerGoesToRedRange(follower);
      }, 3500);
      follower.removeAttribute('range');
      addDamageComponent(follower, 'depletion: No Damage');
      playsound();
    }
  }
}

function followerGoesToOrangeRange(follower){
  follower.setAttribute('follow', {
    target: '#js--orangeRange',
    speed: orangeRangeSpeed
  });
}

function followerGoesToRedRange(follower){
  if(follower != undefined){
    follower.setAttribute('follow', {
      target: '#js--redRange',
      speed: redRangeSpeed
    });
  }
}

function setOrangeRangeSpeed(speed){
  orangeRangeSpeed = speed;
}

function setRedRangeSpeed(speed){
  redRangeSpeed = speed;
}

function playsound(){
  var sound = document.getElementById("hello");

  sound.play();
}
