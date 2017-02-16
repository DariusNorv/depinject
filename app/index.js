/**
* @description This plugin helps to automatically add any NPM dependencies into your project files: html, css, js, pug, hbs, sass, less, etc
 */

let depinject;
const fs = require('fs-extra');

function depinject(opts) {
	const dep = opts || 'dependencies';

	fs.ensureFile('./package.json', (err) => {
		if (err) return console.error(err);

		console.log(`It's OK`);
	})
}

module.exports.depinject;
