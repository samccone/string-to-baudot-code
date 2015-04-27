var convertor = require('../');
var assert = require('assert');

describe('converting strings', function() {
  it('sets the shift header (letter)', function() {
    assert.equal(convertor('a'), '1111100011');
  });

  it('sets the shift header (unit)', function() {
    assert.equal(convertor('1'), '111111101110111');
  });

  it('toggles the shift header', function() {
    assert.equal(convertor('a1a'), '111110001111011101111111100011');
  });

  it('handles a common case', function() {
    assert.equal(convertor(
    'hello! --world'),
    //jscs:disable
    '11111101000000110010100101100011011011011111100100110110001100011111111001111000010101001001001');
    //jscs:enable
  });

  it('handles another common case', function() {
    assert.equal(convertor(
    'rent nine 900 times'),
    //jscs:disable
    '11111010100000101100100000010001100001100110000001001001101111000101101011011111001001000000110111000000100101');
    //jscs:enable
  });
});
