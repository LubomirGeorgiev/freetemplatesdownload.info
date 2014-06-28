module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		
// LESS CSS 
		less: {
			compile: {
				options: {
					compress: true
				},
				files: {
					'css/global.css' : 'css/less/global.less'
				}
			}
		},
		
// PRETTIFY
		 prettify: {
		    options: {
		      indent: 4,
		      preserve_newlines: true
		    },
		  all: {
			expand: true,
			cwd: '_SITE_COMPILED',
			ext: '.html',
			src: ['**/**/**.html'],
			dest: '_SITE_COMPILED'
		  }
		 },

// WATCH
		watch: {
		  cssmin: {
		    files: ['css/**'],
		    tasks: ['less']
		  }
		}
});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-prettify');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['watch']);
}