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
});
