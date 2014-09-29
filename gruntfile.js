module.exports = function(grunt) {

  var path = require('path');
  require('load-grunt-config')(grunt, {
    init: true,
    configPath: path.join(process.cwd(), 'conf'),
    loadGruntTasks: {
      pattern: 'grunt-*',
      config: require('./package.json'),
      scope: 'devDependencies'
    }
  });

  grunt.config('pkg', grunt.file.readJSON('package.json'));
};
