
function spawnEnemys(){
  var i;
  for (i = 0; i < 8; i++){
    // spawnlocation camera 0 0 0

    setTimeout(function() {
      let nummer1 = generateSpawnLocation(-10, 10);
      let nummer2 = generateSpawnLocation(-10, 10);
      let enemys = nummer1.toString() + " 1 " + nummer2.toString()
      let box = document.createElement("a-box");
      let startX = 0;
      let startZ = 0;

      box.setAttribute("position", enemys);
      document.querySelector("#scene").appendChild(box);


      let afstand =  Math.sqrt(
        Math.pow(startX - nummer1, 2) + Math.pow(startZ - nummer2 , 2)
      );
      let duration = afstand * 777;
      console.log(duration);
      box.setAttribute("animation",  'property: position; to: 0 1 0; dur: ' + duration +";");



    }, generateSpawnTimer(5000, 10000));
  }
}

function generateSpawnLocation(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

function generateSpawnTimer(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}
