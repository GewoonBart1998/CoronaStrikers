var spawn = null;
var spawnDuration = 4000;

function createPerson(personCoordinates){
  let createPerson = document.createElement("a-obj-model");
  createPerson.setAttribute('class', 'js--person');
  createPerson.setAttribute('position', personCoordinates[0].toString()
  + " 0.1 " + personCoordinates[1].toString());
  createPerson.setAttribute('color', 'brown');
  createPerson.setAttribute('person', '');
  createPerson.setAttribute('range', '');
  createPerson.setAttribute('observe', '');
  createPerson.setAttribute('scale', "0.5 0.5 0.5");
  createPerson.setAttribute('src', "#Person-obj");
  createPerson.setAttribute('sound', functionName());


  return createPerson;
}

function addPerson(createPerson){
  document.getElementById('js--main-scene').appendChild(createPerson);
}

function generateSpawnLeft(){
  let personX = generateSpawnLocation(-10, -15);
  let personZ = generateSpawnLocation(-15, 15);

  return [personX, personZ];
}

function generateSpawnFront(){
  let personX = generateSpawnLocation(15, -15);
  let personZ = generateSpawnLocation(-10, -15);

  return [personX, personZ];
}

function generateSpawnRight(){
  let personX = generateSpawnLocation(10, 15);
  let personZ = generateSpawnLocation(-15, 15);

  return [personX, personZ];
}

function generateSpawnDown(){
  let personX = generateSpawnLocation(-15, 15);
  let personZ = generateSpawnLocation(10, 15);

  return [personX, personZ];
}

function generateSpawnLocation(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

function generateSpawnTimer(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

function createSpawner(){
  spawn = setInterval(function(){
    addPerson(createPerson(generateSpawnLeft()));
    addPerson(createPerson(generateSpawnFront()));
    addPerson(createPerson(generateSpawnRight()));
    addPerson(createPerson(generateSpawnDown()));
  }, spawnDuration);
}

function deleteAllPeople(){
  let people = document.getElementsByClassName('js--person');
  for(let index = 0; index < people.length; index++){
    disappearAnimationWithHand(people[index]);
    removeEntity(people[index]);
  }
}

function stopSpawner(){
  deleteAllPeople();
  clearInterval(getSpawn());
}

function getSpawn(){
  return spawn;
}

function setSpawnDuration(milliseconds){
  spawnDuration = milliseconds;
}

function functionName() {
  let sound = "src: sound/sound" + Math.floor(Math.random() * 5).toString() + ".mp3; on: click";

  return sound;
}
