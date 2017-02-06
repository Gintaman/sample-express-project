module.exports = function(grunt) {
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',
		'grunt-exec',
	].forEach(task => grunt.loadNpmTasks(task));

	//configure plugins
	grunt.initConfig({
		cafemocha: {
			all: {src: 'qa/tests-*.js', options: {ui: 'tdd'},}
		},
		exec: {
			linkcheck: {cmd: 'linkcheck http://localhost:3000'}
		},
	});
	
	//register
	grunt.registerTask('default', ['cafemocha', 'exec']);
};
