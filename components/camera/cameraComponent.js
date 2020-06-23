AFRAME.registerComponent('fixed-camera', {
  schema:{
    target: {type: 'selector'}
  },
  tick: function () {
    let cameraRotation = this.el.object3D.rotation;
    let playerUI = this.data.target;
    let threeSixtyMovement = (cameraRotation.y * 57.30137667304013);
    playerUI.setAttribute('rotation', "0 " + threeSixtyMovement + " 0");
  }
});
