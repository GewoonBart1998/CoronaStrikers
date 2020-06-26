function randomSound() {
  let sound = "src: sound/sound" + Math.floor(Math.random() * 5).toString() + ".mp3; on: click";

  return sound;
}

function playSound(){
  var sound = document.getElementById("hello");

  sound.play();
}
