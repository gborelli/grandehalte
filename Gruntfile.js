/*global module, grunt */
module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    loadPath: 'sass'
                },
                files: {
                    'css/style.css': 'sass/style.scss',
                    'css/style-large.css': 'sass/style-large.scss',
                    'css/style-medium.css': 'sass/style-medium.scss',
                    'css/style-small.css': 'sass/style-small.scss',
                    'css/style-xlarge.css': 'sass/style-xlarge.scss',
                    'css/style-xsmall.css': 'sass/style-xsmall.scss',
                    'css/ie/v8.css': 'sass/ie/v8.scss',
                    'css/ie/v9.css': 'sass/ie/v9.scss'
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            all: {
                files: {
                    'dist/js/init.min.js': ['js/init.js']
                }
            }
        },

        concat: {
            all: {
                files: {
                    'dist/js/grandehalte.js': [
                        'js/jquery.min.js',
                        'js/jquery.scrolly.min.js',
                        'js/jquery.scrollex.min.js',
                        'js/skel.min.js',
                        'js/skel-layers.min.js',
                        'lib/jquery.bxslider/jquery.bxslider.min.js',
                        'dist/js/init.min.js'
                    ]
                }
            }
        },

        watch: {
            styles: {
                files: [
                    'sass/**/*.scss',
                    'js/**/*.js'
                ],
                tasks: ["sass", "uglify", "concat"],
                options: {
                    nospawn: true
                }
            }
        },

        browserSync: {
            html: {
                bsFiles: {
                    src : [
                        'sass/**/*.scss',
                        'js/**/*.js',
                        '**/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    server: {
                        baseDir: "."
                    }
                }
            }
        }


    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('bsync', ["browserSync:html", "watch"]);

};
