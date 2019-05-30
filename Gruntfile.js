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
                    'bulma/bulma.sass': 'bulma/bulma.sass'
                }
            },
            js: {
                options: { destPrefix: 'assets/vendor/js' },
                files: {
                    'jquery/jquery.min.js': 'jquery/dist/jquery.min.js',
                    'jquery/jquery.min.map': 'jquery/dist/jquery.min.map'
                }
            }
        },

        clean: [ 'assets/vendor', '_sass/vendor', 'bower_components' ]
    });

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', [ 'clean', 'bowercopy' ]);
};
