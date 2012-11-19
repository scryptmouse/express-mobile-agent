'use strict';

var ua = require('mobile-agent');

function ExpressMobileAgent(agent) {
  if (!(this instanceof ExpressMobileAgent))
    return new ExpressMobileAgent(agent);

  if (typeof agent === 'string')
    agent = ua(agent);

  // Attach original mobile-agent object so it
  // will still be accessible if needed
  this['mobile-agent'] = agent;

  this.mobile = agent.Mobile;
}

// Add a shortcut for a 'mobile' vs 'not-mobile'
// class in a view.
ExpressMobileAgent.prototype.toString = function() {
  return this.mobile ? 'mobile' : 'not-mobile';
};

module.exports = ExpressMobileAgent;
