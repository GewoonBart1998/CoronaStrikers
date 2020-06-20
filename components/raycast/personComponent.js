AFRAME.registerComponent('person', {
  update: function(){
    var element = this.el;
    interactWithPeople(element);
  }
});
