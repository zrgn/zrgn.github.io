module.exports = function (grunt) {
    grunt.initConfig({
        bowercopy: {
            options: {
                clean: true,
                runBower: true
            },
            sass: {
                options: { destPrefix: '_sass/vendor' },
                files: {
                    'bulma/sass': 'bulma/sass',
                    'bulma/bulma.sass': 'bulma/bulma.sass',
                    'reveal': 'reveal.js/css',
                }
            },
            jquery: {
                options: { destPrefix: 'assets/vendor/jquery' },
                files: {
                    'jquery.min.js': 'jquery/dist/jquery.min.js',
                    'jquery.min.map': 'jquery/dist/jquery.min.map',
                }
            },
            reveal: {
                options: { destPrefix: 'assets/vendor/reveal' },
                files: {
                    'reveal.js': 'reveal.js/dist/reveal.js',
                    'reveal.css': 'reveal.js/dist/reveal.css',
                    'plugin': 'reveal.js/plugin',
                }
            }
        },

        clean: [ 'assets/vendor', '_sass/vendor', 'bower_components' ]
    });

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', [ 'clean', 'bowercopy' ]);
};
