function createLightSphere(){
  let parentLightSphere = document.createElement('a-entity');
  let childLightSphere = document.createElement('a-entity');
  parentLightSphere.setAttribute('position', '0 0 -4');
  parentLightSphere.setAttribute('class', 'js--removal');
  childLightSphere.setAttribute('id', 'lightSphere');
  childLightSphere.setAttribute('position', '0 3 0');
  childLightSphere.setAttribute('light', 'type: point');
  parentLightSphere.appendChild(childLightSphere);

  return parentLightSphere;
}

function createEnvironment(preset){
  let environment = document.createElement('a-entity');
  environment.setAttribute('id', 'environment');
  environment.setAttribute('environment', 'preset: ' + preset + '; fog: false');
  environment.setAttribute('position', '0 -0.15 0');
  environment.setAttribute('class', 'js--removal');

  return environment;
}

function createRedRange(){
  let redRange = document.createElement('a-cylinder');
  redRange.setAttribute('id', 'js--redRange');
  redRange.setAttribute('class', 'js--removal');
  redRange.setAttribute('position', '0 0.5 0');
  redRange.setAttribute('visible', 'false');
  redRange.setAttribute('scale', '1 0.1 1');
  redRange.setAttribute('radius', '1');

  return redRange;
}

function createOrangeRange(){
  let orangeRange = document.createElement('a-cylinder');
  orangeRange.setAttribute('id', 'js--orangeRange');
  orangeRange.setAttribute('class', 'js--removal');
  orangeRange.setAttribute('position', '0 0.5 0');
  orangeRange.setAttribute('visible', 'false');
  orangeRange.setAttribute('scale', '1 0.1 1');
  orangeRange.setAttribute('radius', '3');

  return orangeRange;
}

function createSpokenWordsBoard(color){
  let board = document.createElement('a-plane');
  board.setAttribute('position', '0 6.8 -3');
  board.setAttribute('class', 'js--removal');
  board.setAttribute('width', '6');
  board.setAttribute('height', '5');
  board.setAttribute('rotation', '40 0 0');
  board.appendChild(createText('0 1.8 0', 'Hou mensen niet alleen tegen met gebaar signalen binnen de tweede cirkel, laat mensen ook weten om afstand te houden door deze woorden te gebruiken!', color));
  board.appendChild(createText('0 1 0', '1. Afstand', color));
  board.appendChild(createText('0 0.5 0', '2. Corona', color));
  board.appendChild(createText('0 0 0', '3. Stop', color));
  board.appendChild(createText('0 -0.5 0', '4. Anderhalve meter', color));
  board.appendChild(createText('0 -1 0', '5. Pardon?', color));
  board.appendChild(createText('0 -1.6 0', '(Wanneer het balk groen is, kan je mensen buiten de tweede cirkel waarschuwen!)', color));

  return board;
}

function createText(position, value, color){
  let text = document.createElement('a-text');
  text.setAttribute('position', position);
  text.setAttribute('align', 'center');
  text.setAttribute('value', value);
  text.setAttribute('color', color)

  return text;
}

function createTree(position){
  let tree = document.createElement('a-obj-model');
  tree.setAttribute('src', '#tree-obj');
  tree.setAttribute('mtl', '#tree-mtl');
  tree.setAttribute('position', position);
  tree.setAttribute('class', 'js--removal');

  return tree;
}

function createTreeTwo(position){
  let tree = document.createElement('a-obj-model');
  tree.setAttribute('src', '#treeTwo-obj');
  tree.setAttribute('mtl', '#treeTwo-mtl');
  tree.setAttribute('position', position);
  tree.setAttribute('class', 'js--removal');

  return tree;
}

function createHouse(position, rotation){
  let house = document.createElement('a-obj-model');
  house.setAttribute('src', '#house-obj');
  house.setAttribute('mtl', '#house-mtl');
  house.setAttribute('position', position);
  house.setAttribute('rotation', rotation);
  house.setAttribute('class', 'js--removal');

  return house;
}

function createGround(source){
  let ground = document.createElement('a-plane');
  ground.setAttribute('position', '0 -0.1 0');
  ground.setAttribute('rotation', '-90 0 0');
  ground.setAttribute('width', '16');
  ground.setAttribute('height', '16');
  ground.setAttribute('src', source);
  ground.setAttribute('material', 'shader: flat');
  ground.setAttribute('class', 'js--removal');

  return ground;
}

function createDecorationRingRange(color, scale, shader){
  let ring = document.createElement('a-ring');
  ring.setAttribute('rotation', '-90 0 0');
  ring.setAttribute('color', color);
  ring.setAttribute('material', shader);
  ring.setAttribute('position', '0 0 0');
  ring.setAttribute('scale', scale);
  ring.setAttribute('class', 'js--removal');

  return ring;
}

function createScore(){
  let score = document.createElement('a-text');
  score.setAttribute('id', 'js--score');
  score.setAttribute('position', '0.6 2.15 -1.5');
  score.setAttribute('width', '2');
  score.setAttribute('value', 'Score: 0');

  return score;
}

function createLifeBar(shader){
  let lifebar = document.createElement('a-entity');
  lifebar.setAttribute('id', 'js--lifebar');
  lifebar.setAttribute('position', '-0.1 1.5 -0.5');
  lifebar.appendChild(createHeart('-0.72 0.64 -1', '0.1 0.1 0.1', shader));
  lifebar.appendChild(createHeart('-0.55 0.7 -1', '0.025 0.05 0.05', shader));
  lifebar.appendChild(createHeart('-0.55 0.58 -1', '0.025 0.05 0.05', shader));

  return lifebar;
}

function createVoiceBar(){
  let voiceBar = document.createElement('a-entity');
  voiceBar.setAttribute('id', 'js--voice-plane');
  voiceBar.setAttribute('geometry', 'primitive: plane; height: 0.15; width: 1');
  voiceBar.setAttribute('material', 'shader: flat; color: white');
  voiceBar.setAttribute('position', '0 2.15 -1.5');
  voiceBar.appendChild(createCommandVoiceScript());

  return voiceBar;
}

function createCommandVoiceScript(){
  let commandVoiceScript = document.createElement('a-text');
  commandVoiceScript.setAttribute('id', 'js--voice');
  commandVoiceScript.setAttribute('value', 'Command:');
  commandVoiceScript.setAttribute('scale', '0.25 0.25 0.25');
  commandVoiceScript.setAttribute('color', 'black');
  commandVoiceScript.setAttribute('position', '0 0 0');
  commandVoiceScript.setAttribute('align', 'center');

  return commandVoiceScript;
}

function createHeart(position, scale, shader){
  let heart = document.createElement('a-obj-model');
  heart.setAttribute('class', 'js--heart');
  heart.setAttribute('src', '#hart-obj');
  heart.setAttribute('color', 'red');
  heart.setAttribute('position', position);
  heart.setAttribute('rotation', '0 90 0');
  heart.setAttribute('scale', scale);
  heart.setAttribute('material', shader);

  return heart;
}

function createPlayerUIScreen(shader){
  let playerUIScreen = document.createElement('a-entity');
  playerUIScreen.setAttribute('id', 'js--player-ui');
  playerUIScreen.setAttribute('position', '0 0 0');
  playerUIScreen.setAttribute('rotation', '0 0 0');
  playerUIScreen.setAttribute('class', 'js--removal');
  playerUIScreen.appendChild(createScore());
  playerUIScreen.appendChild(createVoiceBar());
  playerUIScreen.appendChild(createLifeBar(shader));

  return playerUIScreen;
}

function createLevelMenu(){
  let levelMenu = document.createElement('a-plane');
  levelMenu.setAttribute('id', 'js--levelPlane');
  levelMenu.setAttribute('position', '0 2.5 -3.5');
  levelMenu.setAttribute('width', '5');
  levelMenu.setAttribute('height', '3');
  levelMenu.setAttribute('color', 'brown');
  levelMenu.setAttribute('class', 'js--removal');
  levelMenu.appendChild(createText('0 1 0', 'Selecteer een level:', 'white'));
  levelMenu.appendChild(createThumbnail('js--forestLevel', '-1.5 -0.1 0.1', '#forestThumbnail'));
  levelMenu.appendChild(createThumbnail('js--starryLevel', '0 -0.1 0.1', '#starryThumbnail'));
  levelMenu.appendChild(createThumbnail('js--japanLevel', '1.5 -0.1 0.1', '#japanThumbnail'));

  return levelMenu;
}

function createExplain1(){
  let explain1 = document.createElement('a-plane');
  explain1.setAttribute('src', '#explain1');
  explain1.setAttribute('position', '3.5 2.5 0');
  explain1.setAttribute('width', '5');
  explain1.setAttribute('height', '3');
  explain1.setAttribute('rotation', '0 -90 0');
  explain1.setAttribute('class', 'js--removal');

  return explain1;
}

function createExplain2(){
  let explain2 = document.createElement('a-plane');
  explain2.setAttribute('src', '#explain2');
  explain2.setAttribute('position', '-3.5 2.5 0');
  explain2.setAttribute('width', '5');
  explain2.setAttribute('height', '3');
  explain2.setAttribute('rotation', '0 90 0');
  explain2.setAttribute('visible', 'false');
  explain2.setAttribute('class', 'js--removal');

  return explain2;
}

function createLantaarn(position){
  let lantaarn = document.createElement('a-obj-model');
  lantaarn.setAttribute('src', '#Lantaarn-obj');
  lantaarn.setAttribute('mtl', '#Lantaarn-mtl');
  lantaarn.setAttribute('position', position);
  lantaarn.setAttribute('scale', '0.5 0.5 0.5');

  return lantaarn;
}

function createThumbnail(id, position, source){
  let thumbnail = document.createElement('a-plane');
  thumbnail.setAttribute('class', 'clickable');
  thumbnail.setAttribute('id', id);
  thumbnail.setAttribute('position', position);
  thumbnail.setAttribute('src', source);

  return thumbnail;
}

function createGameOver(){
  let gameOver = document.createElement('a-plane');
  gameOver.setAttribute('position', '0 1.5 -3.5');
  gameOver.setAttribute('width', '2.5');
  gameOver.setAttribute('height', '1.5');
  gameOver.appendChild(createText('0 0 0', 'Game Over', 'white'));

  return gameOver;
}

function addFixedCamera(){
  let camera = document.getElementById('js--camera');
  camera.setAttribute('fixed-camera', 'target: #js--player-ui');
}

function removeFixedCamera(){
  let camera = document.getElementById('js--camera');
  camera.removeAttribute('fixed-camera');
}

function loadForestLevel(){
  let mainScene = document.getElementById('js--main-scene');
  mainScene.appendChild(createEnvironment('forest'));
  mainScene.appendChild(createPlayerUIScreen(''));
  mainScene.appendChild(createDecorationRingRange('#228B22', '1 1 1', 'shader: flat'));
  mainScene.appendChild(createDecorationRingRange('#006400', '3 3 1', 'shader: flat'));
  mainScene.appendChild(createTree('15 -1 5'));
  mainScene.appendChild(createTree('19 -1 -4'));
  mainScene.appendChild(createHouse('-22 -1 0', '0 -180 0'));
  mainScene.appendChild(createTreeTwo('-18 -1 7'));
  mainScene.appendChild(createTree('8.5 -1 19'));
  mainScene.appendChild(createTree('-10 -1 15'));
  mainScene.appendChild(createTreeTwo('10 -0.7 -15'));
  mainScene.appendChild(createTreeTwo('-6 -1 -17'));
  mainScene.appendChild(createTreeTwo('-13.5 -1 -10'));
  mainScene.appendChild(createLantaarn('-17.5 -1 13'));
  mainScene.appendChild(createLantaarn('18.5 -1 10'));
  mainScene.appendChild(createLantaarn('3 -1 -20'));
  mainScene.appendChild(createLantaarn('17.5 -1 -13'));
  mainScene.appendChild(createLantaarn('-18.5 -1 -10'));
  mainScene.appendChild(createLantaarn('-25 -1 5'));
  mainScene.appendChild(createHouse('1 -1 21.5', '0 270 0'));
  mainScene.appendChild(createRedRange());
  mainScene.appendChild(createOrangeRange());
  mainScene.appendChild(createSpokenWordsBoard('white'));
  mainScene.appendChild(createGround('#wood'));
  addFixedCamera();
}

function loadJapanLevel(){
  let mainScene = document.getElementById('js--main-scene');
  mainScene.appendChild(createEnvironment('japan'));
  mainScene.appendChild(createLightSphere());
  mainScene.appendChild(createPlayerUIScreen('shader: flat'));
  mainScene.appendChild(createDecorationRingRange('blue', '1 1 1', 'shader: flat'));
  mainScene.appendChild(createDecorationRingRange('purple', '3 3 1', 'shader: flat'));
  mainScene.appendChild(createRedRange());
  mainScene.appendChild(createOrangeRange());
  mainScene.appendChild(createSpokenWordsBoard('black'));
  mainScene.appendChild(createGround('#japaneseFloor'));
  addFixedCamera();
}

function loadStarryLevel(){
  let mainScene = document.getElementById('js--main-scene');
  mainScene.appendChild(createEnvironment('starry'));
  mainScene.appendChild(createLightSphere());
  mainScene.appendChild(createPlayerUIScreen('shader: flat'));
  mainScene.appendChild(createDecorationRingRange('white', '1 1 1', ''));
  mainScene.appendChild(createDecorationRingRange('blue', '3 3 1', ''));
  mainScene.appendChild(createRedRange());
  mainScene.appendChild(createOrangeRange());
  mainScene.appendChild(createSpokenWordsBoard('white'));
  mainScene.appendChild(createGround('#space'));
  addFixedCamera();
}

function loadDefaultLevel(){
  let mainScene = document.getElementById('js--main-scene');
  mainScene.appendChild(createExplain1());
  mainScene.appendChild(createExplain2());
  mainScene.appendChild(createEnvironment('default'));
  mainScene.appendChild(createGround('#checker'));
  mainScene.appendChild(createLevelMenu());
}

function removeLevel(){
  let camera = document.getElementById('js--camera');
  let removeLevel = document.getElementsByClassName('js--removal');
  if(camera.hasAttribute('fixed-camera')){
    removeFixedCamera();
  }
  for(let index = 0; index < removeLevel.length; index++){
    removeLevel[index].remove();
  }
}
