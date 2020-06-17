window.onload = function(){
  const orangeRange = document.getElementById('js--orangeRange');
  const redRange = document.getElementById('js--redRange');
  var person = document.getElementsByClassName('js--person');
  attachFollowToPerson(person);

  const callback = function(mutationsList, observer){
    for(let mutation of mutationsList){
      if(mutation.type == 'attributes'){
        for(let index= 0; index < person.length; index++){
          if(!person[index].hasAttribute('follow')){
            console.log('ik zit erin');
            setTimeout(function(){
              personGoesToRedRange(person[index])}, 2500);
            observer.disconnect();
          }
        }

        console.log('The ' + mutation.attributeName + ' has changed');

      }
    }
  }
  let observer = new MutationObserver(callback);



  for(let index= 0; index < person.length; index++){
    observer.observe(person[index], {
      attributes: true
    });
  }

};

function attachFollowToPerson(person){
  for(let index= 0; index < person.length; index++){
    personGoesToOrangeRange(person[index]);
  }
}

function personGoesToOrangeRange(person){
  person.setAttribute('follow', {
    target: '#js--orangeRange',
    speed: 1
  });
}

function personGoesToRedRange(person){
  person.setAttribute('follow', {
    target: '#js--redRange',
    speed: 1
  });
}
