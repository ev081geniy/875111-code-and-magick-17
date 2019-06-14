'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_GAP = 10;
var FONT_COLOR = '#000';
var FONT_STYLE = '16px PT Mono';
var FONT_GAP = 20;
var COLUMN_X = 130;
var COLUMN_Y = 90;
var COLUMN_WIDTH = 40;
var COLUMN_MAX_HEIGHT = 150;
var COLUMN_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = FONT_COLOR;
  ctx.font = FONT_STYLE;
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, names, times) {
  var bestResult = Math.max.apply(null, times);

  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, 'Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  renderText(ctx, 'Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);

  for (var i = 0; i < names.length; i++) {
    var columnHeight = (COLUMN_MAX_HEIGHT * times[i]) / bestResult;
    var colorSaturation = Math.ceil(Math.random() * 100);
    var columnPositionX = COLUMN_X + (COLUMN_WIDTH + COLUMN_GAP) * i;

    renderText(ctx, Math.round(times[i]), columnPositionX, COLUMN_Y + COLUMN_MAX_HEIGHT - columnHeight - FONT_GAP);

    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + colorSaturation + '%, 50%)';
    ctx.fillRect(columnPositionX, COLUMN_Y + COLUMN_MAX_HEIGHT - columnHeight, COLUMN_WIDTH, columnHeight);

    renderText(ctx, names[i], columnPositionX, COLUMN_Y + COLUMN_MAX_HEIGHT + FONT_GAP);
  }
};
