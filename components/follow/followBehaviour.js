AFRAME.registerComponent('range', {
  init: function () {
    followerGoesToOrangeRange(this.el);
  }
});

function changeFollowDestination(follower){
    if(!follower.hasAttribute('follow')){
      setTimeout(function(){
        followerGoesToRedRange(follower);
      }, 3500);
    }
}

function followerGoesToOrangeRange(follower){
  follower.setAttribute('follow', {
    target: '#js--orangeRange',
    speed: 0.8
  });
}

function followerGoesToRedRange(follower){
  if(follower != undefined){
    follower.setAttribute('follow', {
      target: '#js--redRange',
      speed: 1
    });
  }
}
