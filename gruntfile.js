module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		
// LESS CSS
// While working on it run "grunt less:dev" when you are ready to deploy please run "grunt less:prod"
		less: {
			// ### Development (RUN --> "grunt less:dev") ###
			dev: {
				options: {
					compress: false,
					sourceMap: true,
					sourceMapFilename: "css/global.map",
					sourceMapURL: "global.map"
				},
				files: {
					'css/global.css' : 'css/less/global.less'
				},
			},
			// ### Production (RUN --> "grunt less:prod") ###
			prod: {
				options: {
					compress: true
				},
				files: {
					'css/global.css' : 'css/less/global.less'
				},
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
		    tasks: ['less:dev']
		  }
		}
});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-prettify');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['watch']);
}