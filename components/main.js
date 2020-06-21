window.onload = function(){
  setSpeed();
  createSpawner();
  speechRecognitionIsSupported();
};

function setSpeed(){
  setOrangeRangeSpeed(1);
  setRedRangeSpeed(1.2);
  setSpawnDuration(8000);
  setDurationWalk(1500);
}
