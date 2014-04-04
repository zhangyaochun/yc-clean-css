'use strict';
var CleanCSS = require('clean-css');
module.exports = function(content,config) {
	config.processImport = false;
	return new CleanCSS(config).minify(content);
};