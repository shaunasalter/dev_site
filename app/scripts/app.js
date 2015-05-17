'use strict';

/**
 * @ngdoc overview
 * @name newdirectoryApp
 * @description
 * # newdirectoryApp
 *
 * Main module of the application.
 */
angular
  .module('newdirectoryApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
