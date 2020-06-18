window.onload = function(){
  attachFollowToObject(getFollow());
  observeAttributesOfEntity(getFollow());
  addPoints(getPerson());
  moveBackwards(getPerson());
  //hoverShowHand();
};
