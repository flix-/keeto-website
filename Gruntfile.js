module.exports = function(grunt)
{
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-modernizr');

	grunt.initConfig(
		{
			clean: [
				'.tmp',
				'css/frontend.css*',
				'js/vendor.js'
			],

			modernizr:
			{
				dist:
				{
					crawl: false,
					customTests: [],
					dest: '.tmp/modernizr.js',
					tests: [ 'flexbox' ],
					options: [ 'setClasses' ],
					uglify: true,
					classPrefix: 'm-'
				}
			},

			concat:
			{
				vendor:
				{
					src: [
						'.tmp/modernizr.js',
						'node_modules/jquery/dist/jquery.min.js',
						'node_modules/slick-carousel/slick/slick.min.js',
						'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'
					],
					dest: 'js/vendor.js',
					nonull: true
				}
			},

			sass:
			{
				options:
				{
					outputStyle: 'compressed',
					includePaths: ['node_modules/slick-carousel/slick', 'node_modules/bootstrap-sass/assets/stylesheets'],
					sourceMap: true
				},

				dist:
				{
					files:
					{
						'css/frontend.css': 'sass/main.scss'
					}
				}
			},

			watch:
			{
				sass:
				{
					files: 'sass/**/*.scss',
					tasks: ['sass']
				}
			}
		});

	grunt.registerTask('bootstrap', ['modernizr', 'concat']);
	grunt.registerTask('build', ['clean', 'bootstrap', 'sass']);
	grunt.registerTask('default', ['build']);
};