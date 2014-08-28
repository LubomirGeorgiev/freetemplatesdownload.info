// Generated on 2014-08-10 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: assets/css
//   javascript: assets/js
//   images: assets/images
//   fonts: assets/fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          //'<%= yeoman.app %>/**/*.{css,less,scss}',
          '!<%= yeoman.app %>/.bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      css: {
        files: [
          '<%= yeoman.app %>/assets/**/*.{less,scss}'
        ],
        tasks: ['less:compile', 'copy:stageCss']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown,less,scss}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>',
            '<%= yeoman.app %>' // This is to access Bower
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '<%= yeoman.dist %>',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
    },
    autoprefixer: {
      options: {
        browsers: ['> 5%', 'last 5 versions', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/assets/css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/assets/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/assets/css',
          src: '**/*.css',
          dest: '.tmp/assets/css'
        }]
      }
    },
    jekyll: {
      options: {
        //bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: 'dist'
          //dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: '<%= yeoman.dist %>',
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/assets/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          minifyCSS: true,
          removeComments: true,
          minifyJS: true

          //collapseBooleanAttributes: true,
          //removeAttributeQuotes: true,
          //removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },

  less: {
    compile: {
      options: {
        
      },
      files: {
        '<%= yeoman.app %>/assets/css/global.css': '<%= yeoman.app %>/assets/css/less/global.less'
      }
    }
  },

    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    copy: {
      bower_bootstrap_fonts: {
        files: [{
          expand: true,
          dot: true,
          flatten: true,
          src: '<%= yeoman.app %>/.bower_components/bootstrap/dist/fonts/**/*',
          dest: '<%= yeoman.dist %>/assets/fonts/'
        }]
      },
      bootstrap_css: {
        files: [{
          expand: true,
          dot: true,
          flatten: true,
          src: ['<%= yeoman.app %>/.bower_components/bootstrap/dist/css/bootstrap.min.css',
                '<%= yeoman.app %>/.bower_components/bootstrap/dist/css/bootstrap-theme.min.css'],

          dest: '<%= yeoman.dist %>/bootstrap/css/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'assets/images/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}'
            // Explicitly add any files your site needs for distribution here.
            //'_bower_components/jquery/jquery.js',
            //'favicon.ico',
            //'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/assets/css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/assets/css/'
        }]
      }
    },

    filerev: {
      options: {
        encoding: 'utf8',
        algorithm: 'sha256',
        length: 32
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/assets/js/**/*.js',
            '<%= yeoman.dist %>/assets/css/**/*.css',
          ]
        }]
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/assets/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/assets/css/**/*.css'
        ]
      }
    },

    concurrent: {
      server: [
        'less:compile',
        'copy:stageCss',
      ],
      dist: [
        'less:compile',
        'copy:dist',
        'copy:bower_bootstrap_fonts',
        'copy:bootstrap_css'
      ]
    }

  });

// ################## Define Tasks #############################

  // #-#-# grunt serve #-#-#
    grunt.registerTask('serve', function (target) {

      
      if (target === 'dist') {
        return grunt.task.run(['build', 'connect:dist:keepalive']);
      }

      grunt.task.run([
        'clean',
        'jekyll:server',
        'concurrent:server',
        'autoprefixer:server',
        'connect:livereload',
        'watch'
      ]);
    });

  // #-#-# grunt server #-#-#
    grunt.registerTask('server', function () {
      grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
      grunt.task.run(['serve']);
    });

  // #-#-# grunt build #-#-#
    grunt.registerTask('build', [
      'clean',
      // Jekyll cleans files from the target directory, so must run first
      'jekyll:dist',
      'concurrent:dist',
      'useminPrepare',
      'concat',
      'autoprefixer:dist',
      'cssmin',
      'uglify',
      'imagemin',
      'svgmin',
      'filerev',
      'usemin',
      'htmlmin'
      ]);

  // #-#-# grunt test #-#-#
    // No real tests yet. Add your own.
    grunt.registerTask('test', [
    //   'clean',
    //   'concurrent:test',
    //   'connect:test'
    ]);

  // #-#-# grunt check #-#-#
    grunt.registerTask('check', [
      'clean',
      'less',
      'jshint:all',
      'csslint:check'
    ]);

  // #-#-# grunt #-#-#
    grunt.registerTask('default', [
      'check',
      'test',
      'build'
    ]);

    grunt.registerTask('run-all', [
      'build',
      'serve'
    ]);
};
