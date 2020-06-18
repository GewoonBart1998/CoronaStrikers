const orangeRange = document.getElementById('js--orangeRange');
const redRange = document.getElementById('js--redRange');
var follow = document.getElementsByClassName('js--follow');

function attachFollowToObject(followObject){
  for(let index= 0; index < followObject.length; index++){
    followObjectGoesToOrangeRange(followObject[index]);
  }
}

function followObjectGoesToOrangeRange(followObject){
  followObject.setAttribute('follow', {
    target: '#js--orangeRange',
    speed: 2
  });
}

function followObjectGoesToRedRange(followObject){
  if(followObject != undefined){
    followObject.setAttribute('follow', {
      target: '#js--redRange',
      speed: 1
    });
    followObject.classList.remove("js--follow");
  }
}

function getFollow(){
  return follow;
}

function getRedRange(){
  return redRange;
}

function getOrangeRange(){
  return orangeRange;
}
