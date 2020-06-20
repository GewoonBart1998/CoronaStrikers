window.onload = function(){
  setInterval(function(){
    addPerson(createPerson());
  }, 5000);
  speechRecognitionIsSupported();
};
