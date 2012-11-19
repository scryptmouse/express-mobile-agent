'use strict';

var vows = require('vows')
  , assert = require('assert')
  , ExpressMobileAgent = require('../express-mobile-agent')
  , fixtures = require('./fixtures.json')
;

vows.describe('ExpressMobileAgent').addBatch({
  'a mobile agent': {
    topic: function() {
      return new ExpressMobileAgent(fixtures.android);
    },

    'should be mobile': function(ema) {
      assert.equal(ema.mobile, true);
    },

    'should return the string "mobile" when coerced to string': function(ema) {
      var s = ''+ema;

      assert.equal(s, 'mobile');
    }
  },

  'a non-mobile agent': {
    topic: function() {
      return new ExpressMobileAgent(fixtures.chrome);
    },

    'should not be mobile': function(ema) {
      assert.equal(ema.mobile, false);
    },

    'should return the string "not-mobile" when coerced to string': function(ema) {
      var s = ''+ema;

      assert.equal(s, 'not-mobile');
    }
  }
}).export(module);
