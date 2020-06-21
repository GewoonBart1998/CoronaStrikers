var spawn = null;
const spawnDuration = 5000;

function createPerson(){
  let createPerson = document.createElement('a-box');
  let personCoordinates= checkIfLocationIsInsideRange();

  createPerson.setAttribute('class', 'js--person');
  createPerson.setAttribute('position', personCoordinates[0].toString()
  + " 0.5 " + personCoordinates[1].toString());
  createPerson.setAttribute('color', 'brown');
  createPerson.setAttribute('person', '');
  createPerson.setAttribute('range', '');
  createPerson.setAttribute('observe', '');

  return createPerson;
}

function addPerson(createPerson){
  document.getElementById('main-scene').appendChild(createPerson);
}

function checkIfLocationIsInsideRange(){
  let personX = generateSpawnLocation(-15, 15);
  let personZ = generateSpawnLocation(-15, 15);
  let personCoordinates = [personX, personZ];
  let collisionBox = {x: 0, z: 0, width: 35, height: 35}
  let personProperties = {x: personX, z: personZ, width: 1, height: 1}

  if (collisionBox.x < personProperties.x + personProperties.width &&
     collisionBox.x + collisionBox.width > personProperties.x &&
     collisionBox.z < personProperties.z + personProperties.height &&
     collisionBox.z + collisionBox.height > personProperties.z) {
       console.log("inside");
       personCoordinates = [personX, generateSpawnLocation(-10, -15)];
  };

  return personCoordinates;
}

function generateSpawnLocation(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

function generateSpawnTimer(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

function createSpawner(){
  spawn = setInterval(function(){
    addPerson(createPerson());
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
