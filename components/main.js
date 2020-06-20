window.onload = function(){
  spawnEnemys();
  // attachFollowToFollower(getFollowers());
  observeAttributesOfEntity(getFollowers());
  interactWithPeople(getPeople());
  speechRecognitionIsSupported();
};
