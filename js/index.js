

function spawnEnemys(){
  // spawnlocation camera 0 0 0
  setTimeout(function() {
    var box = document.createElement("a-box");
    box.setAttribute("position", "6 1 0");
    document.querySelector("#scene").appendChild(box);
  }, 1000);

  setTimeout(function() {
    var box = document.createElement("a-box");
    box.setAttribute("position", "2 1 6");
    document.querySelector("#scene").appendChild(box);
  }, 3000);

  setTimeout(function() {
    var box = document.createElement("a-box");
    box.setAttribute("position", "3 1 -4");
    document.querySelector("#scene").appendChild(box);
  }, 5000);

  setTimeout(function() {
    var box = document.createElement("a-box");
    box.setAttribute("position", "5 1 5");
    document.querySelector("#scene").appendChild(box);
  }, 5000);

  setTimeout(function() {
    var box = document.createElement("a-box");
    box.setAttribute("position", "-6 1 -4");
    document.querySelector("#scene").appendChild(box);
  }, 5500);
}
