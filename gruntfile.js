module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		 prettify: {
		    options: {
		      indent: 2,
		      preserve_newlines: true
		    },
		  all: {
			expand: true,
			cwd: '_site',
			ext: '.html',
			src: ['**/**/**.html'],
			dest: '_site'
		  }
		 },

		watch: {
		  cssmin: {
		    files: ['_site/*'],
		    tasks: ['prettify']
		  }
		}
});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-prettify');

	grunt.registerTask('default', ['watch']);
}