const callback = function(mutationsList, observer){
  for(let mutation of mutationsList){
    if(mutation.type == 'attributes'){
      changeFollow(getFollow());
    }
  }
}

var observer = new MutationObserver(callback);
var config = {
  attributes: true
}

function observeAttributesOfEntity(followObject){
  for(let index= 0; index < followObject.length; index++){
    observer.observe(followObject[index], config);
  }
}

function changeFollow(followObject){
  for(let index= 0; index < followObject.length; index++){
    if(!followObject[index].hasAttribute('follow')){
      setTimeout(function(){
        followObjectGoesToRedRange(followObject[index])
      }, 3500);
    }
  }
}
