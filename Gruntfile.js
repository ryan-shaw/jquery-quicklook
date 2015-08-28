module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build_minification:{
                options:{
                    compress: true
                },
                files:{
                    'build/css/quicklook.min.css': 'src/less/quicklook.less'
                }
            },
            build:{
                options:{
                },
                files:{
                    'build/css/quicklook.css': 'src/less/quicklook.less'
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/js/*.js']
        },
        copy: {
            js: {
                src: 'src/js/quicklook.jquery.js',
                dest: 'build/js/quicklook.jquery.js'
            }
        },
        uglify: {
            js: {
                files: {
                    'build/js/quicklook.jquery.min.js': 'src/js/*.js'
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
