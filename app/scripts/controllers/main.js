'use strict';

/**
 * @ngdoc function
 * @name newdirectoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newdirectoryApp
 */
angular.module('newdirectoryApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
