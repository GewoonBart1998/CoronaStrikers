function createPerson(){
  let createPerson = document.createElement('a-box');
  let personX = generateSpawnLocation(-10, 10);
  let personZ = generateSpawnLocation(-10, 10);
  createPerson.setAttribute('class', 'js--person');
  createPerson.setAttribute('position', personX.toString() + " 0.5 " + personZ.toString());
  createPerson.setAttribute('color', 'black');
  createPerson.setAttribute('range', '');
  createPerson.setAttribute('observe', '');

  return createPerson;
}

function addPerson(createPerson){
  document.getElementById('main-scene').appendChild(createPerson);
}

function generateSpawnLocation(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

function generateSpawnTimer(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}
