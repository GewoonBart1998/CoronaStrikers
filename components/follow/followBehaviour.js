const followers = document.getElementsByClassName('js--follow');

function attachFollowToFollower(followers){
  for(let index= 0; index < followers.length; index++){
    followerGoesToOrangeRange(followers[index]);
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
    follower.classList.remove("js--follow");
  }
}

function getFollowers(){
  return followers;
}
