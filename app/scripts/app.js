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
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl',
          controllerAs: 'contactController',
        })
        .when('/repositories', {
          templateUrl: 'views/repositories.html',
          controller: 'RepositoriesCtrl',
          controllerAs: 'repoCtrl',
        })
        .otherwise({
          redirectTo: '/'
        });

    }]);