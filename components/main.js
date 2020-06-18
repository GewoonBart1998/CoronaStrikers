window.onload = function(){
  attachFollowToObject(getFollow());
  observeAttributesOfEntity(getFollow());
  
  addPoints(getPerson());
  personDisappear(getPerson());
  hoverShowHand();
  hoverHandDisappear();
};
