'use strict';

var ExpressMobileAgent = require('./express-mobile-agent');

module.exports = function(req, res, next) {
  var agent = new ExpressMobileAgent(req.headers['user-agent']);

  // Attach to req and res.locals objects
  req.agent = agent;
  res.locals.agent = agent;

  return next();
};
