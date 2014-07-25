'use strict';

module.exports = function (grunt) {

    var fs = require("fs"),
        packageJson = grunt.file.readJSON('package.json'),
        disDir = "dist/";

    grunt.initConfig({
        pkg: packageJson,
        concat: {
            js: {
                options: {
                    banner: '/*!\n * ' + packageJson.name + '\n * version: ' + packageJson.version + '\n * build: <%= new Date() %>\n */\n\n' +
                        '(function(){\n\n',
                    footer: '\n\n})();\n'
                },
                src: [
                    'config.js',
                    'editor.js',
                    'filter.js',
                    'parser.js',
                    'button.js'
                ],
                dest: disDir + packageJson.name + '.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', 'UEditor build', function () {

        grunt.task.run('concat');

    });


};