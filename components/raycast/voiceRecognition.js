var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
var spacing = [ 'afstand' , 'Corona' , 'stop', 'anderhalve meter', 'bent u nou helemaal betoeterd'];
var correctWord = false;


function createList(){

  return '#JSGF V1.0; grammar spacing; public <spacing> = ' + spacing.join(' | ') + ' ;';
}

function addGrammar(){
  speechRecognitionList.addFromString(createList(), 1);
}

function initializeRecognition(){
  recognition.grammars = speechRecognitionList;
  recognition.continuous = false;
  recognition.lang = "nl";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
}

function startVoiceRecognition(){
  addGrammar();
  initializeRecognition();
  recognition.start();
}

function speechRecognitionIsSupported(){
  if ('SpeechRecognition' in window) {
    console.log('Speech recognition supported 😊');
    startVoiceRecognition();

    return;
  }
  console.log('Speech recognition not supported 😢');
}

recognition.onstart = function() {
  console.log("Voice recognition started. Try speaking into the microphone.");
};

recognition.onresult = function(event){
  let spokenWord = event.results[0][0].transcript;
  console.log(spokenWord);
  for(let index = 0; index < spacing.length; index++){
    if(spokenWord == spacing[index]){
      spokenWord = "";
      correctWord = true;

      return;
    }
    correctWord = false;
  }
}

recognition.onend = function() {
  console.log("recording has stopped");
  recognition.start();
}

function getCorrectWord(){
  return correctWord;
}

function setCorrectWord(word){
  correctWord = word;
}
