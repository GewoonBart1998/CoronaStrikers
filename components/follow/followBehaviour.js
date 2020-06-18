const orangeRange = document.getElementById('js--orangeRange');
const redRange = document.getElementById('js--redRange');
var followers = document.getElementsByClassName('js--follow');

function attachFollowToFollower(followers){
  for(let index= 0; index < followers.length; index++){
    followerGoesToOrangeRange(followers[index]);
  }
}

function followerGoesToOrangeRange(follower){
  follower.setAttribute('follow', {
    target: '#js--orangeRange',
    speed: 2
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

function getRedRange(){
  return redRange;
}

function getOrangeRange(){
  return orangeRange;
}
