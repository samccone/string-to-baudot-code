var charToBaudot = require('char-to-baudot');
var numberRangeRegex = new RegExp(/[0-9]|\!|\#|\&|\'|\(|\)|\"|\/|\:|\;|\?|\,|\./);

function getCharType(char) {
  return numberRangeRegex.test(char) ? 'figure' : 'letter';
}

module.exports = function(str) {
  var shiftState = 'letter';

  return unescape(encodeURIComponent(str))
  .split('')
  .map(function(v) {
    return v.toLowerCase();
  })
  .reduce(function(prev, val) {
    var charType = getCharType(val);
    var shift = '';

    if (charType != shiftState) {
      shiftState = charType;
      shift = charToBaudot['_' + charType + '_shift'];
    }

    return prev + shift + (charToBaudot[val] || '');
  //jscs:disable
  }, charToBaudot._letter_shift);
  //jscs:enable
};
