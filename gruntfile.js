module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css' : ['css/style.scss']
        },
        options: {
          style: 'expanded'
        },
      },
    },
    watch: {
      files: ['css/**'],
      tasks: ['sass'],
    },
    cssmin: {
      minify: {
        src: ['css/style.css'],
        dest: 'css/style.css',
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/script.js' : ['js/script.js'],
        }
      }
    },
    serve: {
      options: {
        port: 9000
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('server', ['serve']);
  grunt.registerTask('w', ['sass','watch']);
  grunt.registerTask('production', ['sass','cssmin','uglify']);
};
