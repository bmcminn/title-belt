// grunt/tasks/default.js

module.exports = function(grunt) {

  grunt.registerTask('default', [
    'jshint'
  , 'jsonlint'
  , 'stylus:dev'
  // , 'sass:dev'
  // , 'less:dev'
  ]);

  grunt.registerTask('build', [
    'jshint'
  , 'jsonlint'
  , 'stylus:build'
  // , 'sass:build'
  // , 'less:build'
  ]);
};
