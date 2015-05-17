'use strict';

/**
 * @ngdoc function
 * @name newdirectoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newdirectoryApp
 */
angular.module('newdirectoryApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
