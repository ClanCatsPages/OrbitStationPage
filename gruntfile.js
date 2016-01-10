module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            production: {
                options: {
                    paths: ["assets/css"],
                    cleancss: true
                },
                files: {
                    "assets/css/ccorbit.css": "assets/less/main.less"
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer-core')({
                        browsers: 'last 1 version'
                    }).postcss
                ]
            },
            files: {
                "assets/css/ccorbit.css": "assets/less/main.less"
            }
        },
        cssmin: {
            options: {},
            target: {
                files: {
                    'assets/css/ccorbit.css': "assets/css/ccorbit.css"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['less', 'postcss', 'cssmin']);
};
