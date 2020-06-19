window.onload = function(){
  attachFollowToFollower(getFollowers());
  observeAttributesOfEntity(getFollowers());
  interactWithPeople(getPeople());
  speechRecognitionIsSupported();
};
