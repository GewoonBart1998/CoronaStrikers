AFRAME.registerComponent('damage', {
  schema:{
    depletion: {type: 'string', default: "No Damage"}
  },

  update: function(oldData){
    if(this.data.depletion == "Remove Heart"){
      depleteHearts();
      disappearAnimationWithHand(this.el);
      removeEntity(this.el);
    }
  }
});
