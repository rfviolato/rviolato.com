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
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
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
        resolve: {
          repos: getRepos
        }
      })
      .otherwise({
        redirectTo: '/'
      });

  }

  function getRepos(reposSvc) {
    return reposSvc.getRepos;
  }