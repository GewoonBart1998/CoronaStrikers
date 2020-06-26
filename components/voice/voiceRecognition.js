var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
var spacing = [ 'afstand' , 'Corona' , 'stop', 'anderhalve meter', 'pardon'];
var correctWord = false;
var spokenWord = "";

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

function stopVoiceRecognition(){
  recognition.stop();
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
  spokenWord = event.results[0][0].transcript;
  updateVoiceText(spokenWord);
  for(let index = 0; index < spacing.length; index++){
    if(spokenWord == spacing[index]){
      changePlaneColorOfPlayersUIWhenCorrect();
      setSpokenWord("");
      setCorrectWord(true);

      return;
    }
    changePlaneColorOfPlayersUIWhenWrong();
    setCorrectWord(false);
  }
}

recognition.onend = function() {
  recognition.start();
}

function updateVoiceText(spokenWord){
  let voiceText = document.getElementById('js--voice');
  let amountOfCharacters = spokenWord.length;
  if(amountOfCharacters > 16){
      spokenWord = spokenWord.slice(0, 16) + "...";
  }
  voiceText.setAttribute('value', 'Command: ' + spokenWord);
}

function changePlaneColorOfPlayersUIWhenCorrect(){
  let voicePlane = document.getElementById('js--voice-plane');
  voicePlane.setAttribute('material', 'shader: flat; color: yellow');
}

function changePlaneColorOfPlayersUIWhenWrong(){
  let voicePlane = document.getElementById('js--voice-plane');
  voicePlane.setAttribute('material', 'shader: flat; color: red');
}

function changePlaneColorOfPlayersUIWhenNeutral(spokenWord){
  let voicePlane = document.getElementById('js--voice-plane');
  voicePlane.setAttribute('material', 'shader: flat; color: white');
  setSpokenWord("");
  updateVoiceText(getSpokenWord());
}

function getCorrectWord(){
  return correctWord;
}

function setCorrectWord(word){
  correctWord = word;
}

function setSpokenWord(word){
  spokenWord = word;
}

function getSpokenWord(){
  return spokenWord;
}
