'use strict';
var Clean = require('clean-css');
module.exports = function(content,config) {
	config.processImport = false;
	return Clean.process(content,config);
};