module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build_minification:{
                options:{
                    compress: true
                },
                files:{
                    'build/css/ipop.min.css': 'src/less/ipop.less'
                }
            },
            build:{
                options:{
                },
                files:{
                    'build/css/ipop.css': 'src/less/ipop.less'
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/js/*.js']
        },
        copy: {
            js: {
                src: 'src/js/ipop.jquery.js',
                dest: 'build/js/ipop.jquery.js'
            }
        },
        uglify: {
            js: {
                files: {
                    'build/js/ipop.jquery.min.js': 'src/js/*.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'jshint', 'uglify', 'copy']);
};
