const callback = function(mutationsList, observer){
  for(let mutation of mutationsList){
    if(mutation.type == 'attributes'){
      changeFollow(getPerson());
    }
    console.log('The ' + mutation.attributeName + ' has changed');
  }
}

var observer = new MutationObserver(callback);
var config = {
  attributes: true
}

function observeAttributesOfEntity(person){
  for(let index= 0; index < person.length; index++){
    observer.observe(person[index], config);
  }
}

function changeFollow(person){
  for(let index= 0; index < person.length; index++){
    if(!person[index].hasAttribute('follow')){
      console.log('ik zit erin');
      setTimeout(function(){
        personGoesToRedRange(person[index])}, 2500);
    }
  }
}
