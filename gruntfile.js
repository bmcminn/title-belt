module.exports = function(grunt) {

  'use strict';

  var path    = require('path')
    // , lodash  = require('lodash')
    ;

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
      configPath: path.join(process.cwd(), 'grunt')
    , data:       require('./grunt/config.json')
    });

  grunt.loadTasks('./tasks/');

};
