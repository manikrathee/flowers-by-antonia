module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          '/css/style.css' : ['/css/style.scss']
        },
        options: {
          style: 'expanded'
        },
      },
    },
    watch: {
      files: ['*/**'],
      tasks: ['sass','concat'],
    },
    cssmin: {
      minify: {
        src: ['/css/style.css'],
        dest: '/css/style.css',
      }
    },
    uglify: {
      my_target: {
        files: {
          '/js/script.js' : ['/js/script.js'],
        }
      }
    },
    jekyll: {
      dist: {
        options: {
          config: '_config.yml'
        }
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 7,
          progressive: true,
        },
        files: [{
          expand: true,
          cwd: '/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '/img/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','concat']);
  grunt.registerTask('w', ['sass','concat','watch']);
  grunt.registerTask('production', ['sass','concat','cssmin','uglify','imagemin']);
};
