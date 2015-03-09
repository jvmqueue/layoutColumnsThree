/* Reference: http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja/ */
/* Reference installing grunt packages: https://developer.tizen.org/dev-guide/2.2.0/org.tizen.web.appprogramming/html/guide/w3c_guide/perf_guide/install_use_grunt.htm */
var grunt = require('grunt');


grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-csslint');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-clean');




module.exports = function(grunt){


	grunt.initConfig({
		jshint: {
			  all: [ // no scripts in this project. this is simply a placeholder
				'scripts/view.js'
			  ]
		},
		csslint: {
			  all: [
				'styles/**/*.css'
			  ]
		},
		cssmin: {
		  target: {
			files: [{
			  expand: true,
			  cwd: 'styles', /* working direetory */
			  src: ['*.css', '!*.min.css'],
			  dest: 'minified', /* write individual min files here */
			  ext: '.min.css'
			}]
		  }
		},
		
	   uglify: {
			compress:{ // no scripts in this project, this is simply a placeholder
				files: {
				  'scripts/minified/mainCompress.js': ['scripts/view.js']
				}
			}
		},
		clean:{
			css:['minified']
		}		
	})
};



grunt.registerTask('default', [
	'jshint',
	'csslint',
	'cssmin',
	'uglify'
]);

grunt.registerTask('lintcss', [
	'csslint'
]);
grunt.registerTask('lintcssmin', [
	'cssmin'
]);
grunt.registerTask('lintclean', ['clean']);


