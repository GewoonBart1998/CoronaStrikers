window.onload = function(){
  attachFollowToFollower(getFollowers());
  observeAttributesOfEntity(getFollowers());
  addPoints(getPeople());
  interactWithPeople(getPeople());
  speechRecognitionIsSupported();
};
