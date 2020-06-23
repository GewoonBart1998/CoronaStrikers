window.onload = function(){
  let options = document.getElementsByClassName("js--option");
  let cursor = document.getElementById("js--cursor");
  let score = document.getElementById("js--score");
  let menu = document.getElementById("menuScene");
  let game = document.getElementById("gameScene");
  let hearts = document.getElementById("js--hearts");
  let voice = document.getElementById("js--voice-plane");
  let uitleg = document.getElementById("uitlegScene");
  let guide = document.getElementById("js--uitleg");
  let back = document.getElementById("js--back");

  function addListeners() {
    for (let i = 0; i < options.length; i++) {
      options[i].addEventListener('click', function(evt) {
        if (options[i].attributes[1].value === "Start") {
          nextScene("start");
        } else if (options[i].attributes[1].value === "Uitleg") {
          nextScene("uitleg");
        } else if (options[i].attributes[1].value === "Terug naar menu") {
          nextScene("menu");
        }
      });
    }
  }

addListeners();

  function nextScene(str) {
    switch (str) {
      case "start":
        cursor.setAttribute("raycaster", "objects: js--person");
        score.setAttribute("visible", "true");
        menu.setAttribute("visible", "false");
        //game.setAttribute("visible", "true");
        hearts.setAttribute("visible", "true");
        voice.setAttribute("visible", "true");
        setSpeed();
        createSpawner();
        speechRecognitionIsSupported();
        break;
      case "uitleg":
        menu.setAttribute("visible", "false");
        uitleg.setAttribute("visible", "true");
        guide.setAttribute("visible", "false");
        back.setAttribute("visible", "true");
        break;
      case "menu":
        uitleg.setAttribute("visible", "false");
        menu.setAttribute("visible", "true");
        back.setAttribute("visible", "false");
        guide.setAttribute("visible", "true");
        break;
      default:
    }
  }
};

function setSpeed(){
  setOrangeRangeSpeed(0.7);
  setRedRangeSpeed(0.9);
  setSpawnDuration(8000);
  setDurationWalk(1500);
}
