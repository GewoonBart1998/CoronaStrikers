window.onload = function(){
  setSpeed();
  createSpawner();
  speechRecognitionIsSupported();
};

function setSpeed(){
  setOrangeRangeSpeed(1);
  setRedRangeSpeed(1.2);
  setSpawnDuration(2500);
  setDurationWalk(1500);
}
