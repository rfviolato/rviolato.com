'use strict';

/**
 * @ngdoc overview
 * @name rviolatocomApp
 * @description
 * # rviolatocomApp
 *
 * Main module of the application.
 */
angular
  .module('rviolatocomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(false);
      $routeProvider
        .when('/', {
          templateUrl: 'views/hello.html',
          controller: 'HelloCtrl',
          controllerAs: 'hello',
        })
        .when('/projects', {
          templateUrl: 'views/projects.html',
          controller: 'ProjectsCtrl',
          controllerAs: 'projects',
        })
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl',
          controllerAs: 'contact',
        })
        .when('/repositories', {
          templateUrl: 'views/repositories.html',
          controller: 'RepositoriesCtrl',
          controllerAs: 'repos',
        })
        .otherwise({
          redirectTo: '/'
        });

    }]);