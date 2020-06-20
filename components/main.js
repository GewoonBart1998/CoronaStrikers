window.onload = function(){
  setInterval(function(){
    addPerson(createPerson());
  }, 5000);
  interactWithPeople(getPeople());
  speechRecognitionIsSupported();
};
