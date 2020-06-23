window.onload = function(){
  let options = document.getElementsByClassName("js--option");
  let cursor = document.getElementById("js--cursor");
  let score = document.getElementById("js--score");
  let menu = document.getElementById("menuScene");
  let game = document.getElementById("gameScene");
  let hearts = document.getElementById("js--hearts");
  let voice = document.getElementById("js--voice-plane");

    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function(evt) {
          if (options[i].attributes[1].value === "Start") {
            nextScene("start");
          } else if (options[i].attributes[1].value === "Uitleg") {
            nextScene("uitleg");
          } else if (options[i].attributes[1].value === "Tutorial") {
            nextScene("tutorial");
          }

      });
    }

    function nextScene(str) {
      switch (str) {
        case "start":
          cursor.setAttribute("raycaster", "objects: js--person");
          score.setAttribute("visible", "true");
          menu.setAttribute("visible", "false");
          game.setAttribute("visible", "true");
          hearts.setAttribute("visible", "true");
          voice.setAttribute("visible", "true");
          attachFollowToFollower(getFollowers());
          observeAttributesOfEntity(getFollowers());
          interactWithPeople(getPeople());
          speechRecognitionIsSupported();
          setSpeed();
          createSpawner();
          speechRecognitionIsSupported();
          break;
        case "uitleg":
          cursor.setAttribute("raycaster", "objects: js--person");
          score.setAttribute("visible", "true");
          menu.setAttribute("visible", "false");
          game.setAttribute("visible", "true");
          hearts.setAttribute("visible", "true");
          voice.setAttribute("visible", "true");
          attachFollowToFollower(getFollowers());
          observeAttributesOfEntity(getFollowers());
          interactWithPeople(getPeople());
          speechRecognitionIsSupported();
          break;
        default:
      }
    }
};

function setSpeed(){
  setOrangeRangeSpeed(1);
  setRedRangeSpeed(1.2);
  setSpawnDuration(8000);
  setDurationWalk(1500);
}
