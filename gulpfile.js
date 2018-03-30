'use strict';

var gulp = require('gulp');
var garlicoreTasks = require('gamblecore-build');

garlicoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
