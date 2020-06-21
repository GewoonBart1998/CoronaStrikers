AFRAME.registerComponent('follow', {
  schema: {
    target: {type: 'selector'},
    speed: {type: 'number'}
  },

  init: function () {
    this.directionVec3 = new THREE.Vector3();
  },

  tick: function (time, timeDelta) {
    let directionVec3 = this.directionVec3;
    let targetPosition = this.data.target.object3D.position;
    let currentPosition = this.el.object3D.position;
    let radius = this.data.target.getAttribute('radius') + ".5";

    directionVec3.copy(targetPosition).sub(currentPosition);

    let distance = directionVec3.length();

    if (distance < radius) {
      if(this.el.hasAttribute('damage')){
        addDamageComponent(this.el, 'depletion: Remove Heart');
      }
      this.el.removeAttribute('follow');

      return;
    }

    let factor = this.data.speed / distance;
    ['x', 'y', 'z'].forEach(function (axis) {
      directionVec3[axis] *= factor * (timeDelta / 1000);
    });

    this.el.setAttribute('position', {
      x: currentPosition.x + directionVec3.x,
      y: 0.5,
      z: currentPosition.z + directionVec3.z
    });
  }
});
