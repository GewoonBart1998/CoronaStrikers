const callback = function(mutationsList, observer){ callWhenAttributeChanges(mutationsList, observer); };
const observer = new MutationObserver(callback);
const config = { attributes: true };

function observeAttributesOfEntity(followers){
  for(let index= 0; index < followers.length; index++){
    observer.observe(followers[index], config);
  }
}

function changeFollowDestination(followers){
  for(let index= 0; index < followers.length; index++){
    if(!followers[index].hasAttribute('follow')){
      setTimeout(function(){
        followerGoesToRedRange(followers[index]);
      }, 3500);
    }
  }
}

function callWhenAttributeChanges(mutationsList, observer){
  for(let mutation of mutationsList){
    if(mutation.type == 'attributes'){
      changeFollowDestination(getFollowers());
    }
  }
}
