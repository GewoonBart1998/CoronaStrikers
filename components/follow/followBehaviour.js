const orangeRange = document.getElementById('js--orangeRange');
const redRange = document.getElementById('js--redRange');
var person = document.getElementsByClassName('js--person');
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
  let person = getPerson();
  for(let index = 0; index < person.length; index++ ){
    if(person[index].classList.contains('js--follow')){
      followObject.setAttribute('follow', {
        target: '#js--redRange',
        speed: 1
      });
      followObject.classList.remove("js--follow");
    }
  }
}

function getPerson(){
  return person;
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
