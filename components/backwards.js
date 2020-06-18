function moveBackwards(person){
  for(let index= 0; index < person.length; index++){
    person[index].addEventListener('click', function(event){
      this.classList.remove('js--follow');
      this.removeAttribute('follow');
      let att = document.createAttribute('animation');
      att.value = "property: scale; easing: linear; dur: 2000; to: 0 0 0";
      this.setAttribute('animation__walk', att.value);
      setTimeout(function(){
        person[index].remove();
      }, 2000);
    });
  }
}

function hoverShowHand(){
  for(let index= 0; index < person.length; index++){
    person[index].addEventListener('hover', function(event){
      let camera = document.getElementById('js--camera');
      let box = document.createElement('a-box');
      box.setAttribute('position', "0 0 -4");
      box.setAttribute('color', "yellow");
      box.setAttribute('scale', "0.5 0.5 0.5");
      camera.appendChild(box);
    });
  }
}
