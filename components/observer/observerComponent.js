AFRAME.registerComponent('observe', {
  update: function () {
    var element = this.el;
    const callback = function(mutationsList, observer){
      callWhenAttributeChanges(mutationsList, observer, element);
    };
    const observer = new MutationObserver(callback);
    const config = { attributes: true };
    observer.observe( element , config);
  }
});

function callWhenAttributeChanges(mutationsList, observer, follower){
  for(let mutation of mutationsList){
    if(mutation.type == 'attributes'){
      changeFollowDestination(follower);
    }
  }
}
