module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      configFiles: {
        files: [ 'Gruntfile.js', 'config/*.js' ],
        options: {
          reload: true
        }
      },
      all: {
        files: ['html/**/*.html','html/**/*.js'],
        options: {
          livereload: {
            host: '127.0.0.1',
            /* port for livereload.js */
            port: 1337
          }
        }
      }
    },
    connect: {
      html: {
        options: {
          hostname: '127.0.0.1',
          port: 8080,
          /* set your html path here */
          base: 'html',
          keepalive: false,
          /* port for livereload.js */
          livereload: 1337,
          //debug: true,
          open: true
        }
      },
      phtml: {
        options: {
          hostname: '127.0.0.1',
          port: 8080,
          /* set your html path here */
          base: ['app','html'],
          keepalive: false,
          /* port for livereload.js */
          livereload: 1337,
          //debug: true,
          open: true
        }
      }
    },
    php: {
        dist: {
            options: {
                port: 5000,
                /* set your php path here */
                base: 'app',
                keepalive: true
            }
        },
        phtml: {
            options: {
                port: 8090,
                /* set your php path here */
                base: 'app',
                keepalive: false,
                router: 'app/XDomRouter.php'
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugins that provides the "connect" task
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Load the plugins that provides the "php" task
  grunt.loadNpmTasks('grunt-php');
  grunt.loadNpmTasks('grunt-hapi');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('serve', ['connect:html']);
  grunt.registerTask('serve-html', ['connect:html', 'watch']);
  grunt.registerTask('serve-php', ['php:dist']);
  grunt.registerTask('serve-phtml', ['php:phtml', 'connect:phtml', 'watch']);

};
