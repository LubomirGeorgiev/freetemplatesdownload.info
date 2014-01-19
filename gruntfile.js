module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		less: {
			compile: {
				options: {
					compress: true,
				},
				files: {
					'css/homepage.css' : 'css/less/homepage.less',
					'css/global.css' : 'css/less/global.less',
					'css/all-templates.css' : 'css/less/all-templates.less',
					'css/sitemap.css' : 'css/less/sitemap.less'
				}
			}
		},


		banner: '/*\n' +
		              ' *  freetemplatesdownload.info v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
		              ' *  Copyright <%= grunt.template.today("yyyy") %> Lubomir Georgiev email: lubomirgeorgievgeorgiev@gmail.com\n' +
					  ' *  Build with all the love in the world!\n' +
		              ' *  Licensed under - Creative Commons Attribution 4.0 International (http://creativecommons.org/licenses/by/4.0/)\n' +
		              ' *  GitHub Repository: https://github.com/LubomirGeorgiev/freetemplatesdownload.info\n' +
		              ' */\n',
		usebanner: {
			banner: {
				options: {
				position: 'top',
				banner: '<%= banner %>'
			},
			files: {
				src: [ 'css/*.css' ]
			}
			}
		},

		watch: {
		  scripts: {
		    files: ['css/less/**/*.less'],
		    tasks: ['less', 'usebanner']
		  }
		}
	});

	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['watch']);
}