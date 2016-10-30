module.exports = function(grunt)
{
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-cache-breaker');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-modernizr');

	grunt.initConfig(
		{
			clean: [
				'.tmp',
				'webroot/static/css/*',
				'webroot/static/js/*',
			],

			modernizr:
			{
				dist:
				{
					"parseFiles": true,
					"crawl": false,
					"customTests": [],
					"dest": ".tmp/modernizr.js",
					"tests": [],
					"options": [ "setClasses" ],
					"uglify": true
				}
			},

			concat:
			{
				"vendor":
				{
					"src":
					[
						'.tmp/modernizr.js',
						'node_modules/jquery/dist/jquery.min.js',
						'node_modules/lightslider/src/js/lightslider.js',
						'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
					],
					"dest": 'webroot/static/js/vendor.js',
					"nonull": true
				},
				"keeto":
				{
					"src":
					[
						'js/frontend.js',
					],
					"dest": 'webroot/static/js/keeto.js',
					"nonull": true
				}
			},

			uglify:
			{
				"options":
				{
					compress: true,
					mangle: true,
					sourceMap: false,
				},
				"keeto":
				{
					"files":
					{
						'webroot/static/js/keeto.min.js': ['webroot/static/js/keeto.js'],
						'webroot/static/js/vendor.min.js': ['webroot/static/js/vendor.js']
					}
				}
			},

			sass:
			{
				"options":
				{
					"outputStyle": 'compressed',
					"includePaths": ['node_modules/lightslider/src/css', 'node_modules/bootstrap-sass/assets/stylesheets'],
					"sourceMap": true
				},

				dist:
				{
					"files":
					{
						'webroot/static/css/frontend.css': 'sass/main.scss'
					}
				}
			},

			copy:
			{
				"keeto":
				{
					"files":
					[
						{
							"expand": true,
							"cwd": 'node_modules/bootstrap-sass/assets/fonts/',
							"src": ['**'],
							"dest": 'webroot/static/fonts/',
						}
					]
				}
			},

			cachebreaker:
			{
				"keeto":
				{
					"options":
					{
						"match": ['frontend.css', 'vendor.*.js', 'keeto.*.js'],
					},
					"files":
					{
						"src": ['webroot/index.html']
					}
				}
			},

			watch:
			{
				"sass":
				{
					"files": 'sass/**/*.scss',
					"tasks": ['sass']
				},
				"js":
				{
					"files": 'js/*.js',
					"tasks": ['concat', 'uglify']
				}
			},
		});

	grunt.registerTask('default', ['clean', 'modernizr', 'concat', 'uglify', 'copy', 'sass', 'cachebreaker']);
};