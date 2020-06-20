function spawnEnemys(){
  setInterval(function() {
    let nummer1 = generateSpawnLocation(-10, 10);
    let nummer2 = generateSpawnLocation(-10, 10);
    let enemys = nummer1.toString() + " 1 " + nummer2.toString()
    let box = document.createElement("a-box");

    box.setAttribute("position", enemys);
    box.setAttribute("class", "js--person js--follow");
    box.setAttribute('follow', {
      target: '#js--orangeRange',
      speed: 0.8
    });

    document.querySelector("#scene").appendChild(box);


    }, generateSpawnTimer(5000, 10000));
}

function generateSpawnLocation(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

function generateSpawnTimer(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}
