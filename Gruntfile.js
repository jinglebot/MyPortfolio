module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '320',
            // suffix: '_small',
            quality: 20
          },{
            name: 'large',
            width: '640',
            // suffix: '_large',
            quality: 30
          },{
            name: 'large',
            width: '1024',
            suffix: '_x2',
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};