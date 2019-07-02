'use strict';

var setup = document.querySelector('.setup');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var setupSimilar = document.querySelector('.setup-similar');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = setup.querySelector('[name="username"]');
var userNamefocus = false;
var setupWizard = setup.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');
var wizardCoatInput = setup.querySelector('[name="coat-color"]');
var wizardEyesInput = setup.querySelector('[name="eyes-color"]');
var wizardFireballInput = setup.querySelector('[name="fireball-color"]');

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var DEFAULT_POSITION_TOP = 80;
var DEFAULT_POSITION_LEFT = 50;

var classRemove = function (element, className) {
  element.classList.remove(className);
};

var randomIndexArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createWizardData = function () {
  return {
    name: randomIndexArray(WIZARD_FIRST_NAMES) + ' ' + randomIndexArray(WIZARD_LAST_NAMES),
    coatColor: randomIndexArray(WIZARD_COAT_COLORS),
    eyesColor: randomIndexArray(WIZARD_EYES_COLORS)
  };
};

var renderWizard = function (wizardData) {
  var cloneWizard = wizardTemplate.cloneNode(true);
  cloneWizard.querySelector('.setup-similar-label').textContent = wizardData.name;
  cloneWizard.querySelector('.wizard-coat').style.fill = wizardData.coatColor;
  cloneWizard.querySelector('.wizard-eyes').style.fill = wizardData.eyesColor;
  fragment.appendChild(cloneWizard);
};

var renderFragment = function () {
  for (var i = 0; i < 4; i++) {
    var wizardData = createWizardData();
    renderWizard(wizardData);
  }
  similarList.appendChild(fragment);
};

renderFragment();
classRemove(setupSimilar, 'hidden');

var openPopup = function () {
  setup.classList.remove('hidden');
  setup.style.top = DEFAULT_POSITION_TOP + 'px';
  setup.style.left = DEFAULT_POSITION_LEFT + '%';
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && !userNamefocus) {
    closePopup();
  }
};

var onUserNameFocus = function () {
  userNamefocus = true;
};

var onUserNameBlur = function () {
  userNamefocus = false;
};

var onSetupOpenKeyPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
};

var onSetupCloseKeyPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
};

var onWizardCoatClick = function () {
  var randomColor = randomIndexArray(WIZARD_COAT_COLORS);
  wizardCoat.style.fill = randomColor;
  wizardCoatInput.value = randomColor;
};

var onWizardEyesClick = function () {
  var randomColor = randomIndexArray(WIZARD_EYES_COLORS);
  wizardEyes.style.fill = randomColor;
  wizardEyesInput.value = randomColor;
};

var onWizardFireballClick = function () {
  var randomColor = randomIndexArray(FIREBALL_COLORS);
  fireballWrap.style.backgroundColor = randomColor;
  wizardFireballInput.value = randomColor;
};

userName.addEventListener('focus', onUserNameFocus);

userName.addEventListener('blur', onUserNameBlur);

setupOpen.addEventListener('click', openPopup);

setupOpen.addEventListener('keydown', onSetupOpenKeyPress);

setupClose.addEventListener('click', closePopup);

setupClose.addEventListener('keydown', onSetupCloseKeyPress);

wizardCoat.addEventListener('click', onWizardCoatClick);

wizardEyes.addEventListener('click', onWizardEyesClick);

fireballWrap.addEventListener('click', onWizardFireballClick);
