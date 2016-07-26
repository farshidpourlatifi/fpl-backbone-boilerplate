module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: '../src',
                        src: '**',
                        dest: '../public/'
                    }

                ]
            }
        },

        watch: {
            dev: {
                files: ['../src/**','../test/**'],
                tasks: ['copy'],
                options: {
                    host: '127.0.0.1',
                    livereload: 35729
                },
            },
        },

        connect: {
            dev: {
                options: {
                    //hostname: 'www.fpl-backbone.local',
                    hostname: '127.0.0.1',
                    port: 3030,
                    open: true,
                    livereload: true,
                    base: {
                        path: '../public',
                        options: {
                            index: 'index.html'
                        }
                    },
                    middleware: function(connect, options, middlewares) {
                            middlewares.unshift(function(req, res, next) {
                                res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3031');
                                res.setHeader('Access-Control-Allow-Methods', 'http://127.0.0.1:3031');
                                next();
                            });
                            return middlewares;
                        }
                }
            },
            test: {
                options: {
                    //hostname: 'www.fpl-backbone.local',
                    hostname: '127.0.0.1',
                    port: 3031,
                    open: true,
                    livereload: true,
                    base: {
                        path: '../test',
                        options: {
                            index: 'index.html'
                        }
                    }
                }
            }
        }




    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-real-favicon');

    //grunt.registerTask('default', ['copy']);

    // grunt.registerTask('default', [
    //     'copy',
    //     'connect:dev',
    //     'connect:test'
    // ]);

    // Start web server
    grunt.registerTask('dev', [
        'copy:main',
        'connect:dev',
        'connect:test',
        'watch'
    ]);


};
