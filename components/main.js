window.onload = function(){
  setSpeed();
  createSpawner();
  speechRecognitionIsSupported();
};

function setSpeed(){
  setOrangeRangeSpeed(0.7);
  setRedRangeSpeed(0.9);
  setSpawnDuration(8000);
  setDurationWalk(1500);
}
