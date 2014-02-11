module.exports = function(grunt) {

  // Project configuration.
  	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    
	    sass: {
	    	dist: {
		      	options: {
		        	style: 'compressed'
		      	},
		      	files: {
		        	'tmp/global.css': 'lib/global.scss'
		      	}
		    }
		},
		autoprefixer: {
            dist: {
                files: {
                    'build/css/global.css': 'tmp/global.css'
                }
            }
        },
        coffee: {
          compile: {
	            files: {
	              	'tmp/script.js': 'lib/script.coffee'
	            }
          	}
      	},
      	uglify: {
      		my_target: {
      		    files: {
      		    	'build/js/vendor.min.js': 'lib/vendor/*.js',
      		    	'build/js/script.min.js': 'tmp/script.js'
      		    }
      		}
	    },
	    watch: {
	     	css: {
	        	files: 'lib/*.scss',
	        	tasks: ['sass','autoprefixer'],
	        	options: {
	          		livereload: true,
	        	},
	      	},
	      	scripts: {
	      	    files: 'lib/*.coffee',
	      	    tasks: ['coffee','uglify']
	      	},
	    }

  	});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify','sass','autoprefixer','coffee','watch']);


};