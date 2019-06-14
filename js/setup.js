'use strict';

var setup = document.querySelector('.setup');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var setupSimilar = document.querySelector('.setup-similar');

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var classRemove = function (element, className) {
  element.classList.remove(className);
};

var randomIndexArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var wizardData = function (firstName, lastName, coatColor, eyesColor) {
  return {
    name: randomIndexArray(firstName) + ' ' + randomIndexArray(lastName),
    coatColor: randomIndexArray(coatColor),
    eyesColor: randomIndexArray(eyesColor)
  };
};

var arrayPush = function (array) {
  for (var i = 0; i < 4; i++) {
    array.push(wizardData(WIZARD_FIRST_NAMES, WIZARD_LAST_NAMES, WIZARD_COAT_COLORS, WIZARD_EYES_COLORS));
  }
};

var renderWizard = function (arrayIndex) {
  var cloneWizard = wizardTemplate.cloneNode(true);
  cloneWizard.querySelector('.setup-similar-label').textContent = arrayIndex.name;
  cloneWizard.querySelector('.wizard-coat').style.fill = arrayIndex.coatColor;
  cloneWizard.querySelector('.wizard-eyes').style.fill = arrayIndex.eyesColor;
  fragment.appendChild(cloneWizard);
};

var renderFragment = function (array) {
  for (var i = 0; i < array.length; i++) {
    renderWizard(wizards[i]);
  }
  similarList.appendChild(fragment);
};

classRemove(setup, 'hidden');
arrayPush(wizards);
renderFragment(wizards);
classRemove(setupSimilar, 'hidden');
