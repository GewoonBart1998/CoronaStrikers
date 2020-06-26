function menu(){
  levelSelect();
  levelPlaneColorChange();
}

function levelSelect(){
  whenChosenForest();
  whenChosenJapan();
  whenChosenStarry();
}

function whenChosenForest(){
  let forestLevel = document.getElementById('js--forestLevel');
  forestLevel.addEventListener('click', function(event){
    removeLevel();
    loadForestLevel();
    setSpeed();
    createSpawner();
    speechRecognitionIsSupported();
  });
}

function whenChosenJapan(){
  let japanLevel = document.getElementById('js--japanLevel');
  japanLevel.addEventListener('click', function(event){
    removeLevel();
    loadJapanLevel();
    setSpeed();
    createSpawner();
    speechRecognitionIsSupported();
  });
}

function whenChosenStarry(){
  let starryLevel = document.getElementById('js--starryLevel');
  starryLevel.addEventListener('click', function(event){
    removeLevel();
    loadStarryLevel();
    setSpeed();
    createSpawner();
    speechRecognitionIsSupported();
  });
}

function levelPlaneColorChange(){
  let levelPlane = document.getElementById('js--levelPlane');
  intersectedPlaneColor(levelPlane);
  clearedIntersectedPlaneColor(levelPlane);
}

function intersectedPlaneColor(levelPlane){
  levelPlane.addEventListener('raycaster-intersected', function(event){
    levelPlane.setAttribute('color', 'green');
  });
}

function clearedIntersectedPlaneColor(levelPlane){
  levelPlane.addEventListener('raycaster-intersected-cleared', function(event){
    levelPlane.setAttribute('color', 'brown');
  });
}
