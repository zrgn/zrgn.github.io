module.exports = function (grunt) {
    grunt.initConfig({
        bower: { install: { options: {
            copy: true,
            targetDir: 'assets'
        } } },
        clean: [ 'assets', 'bower_components' ]
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', [ 'clean', 'bower' ]);
};