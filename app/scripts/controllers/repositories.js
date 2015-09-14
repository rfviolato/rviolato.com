'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:RepositoriesCtrl
 * @description
 * # RepositoriesCtrl
 * Controller of the rviolatocomApp
 */
angular.module('rviolatocomApp')
  .controller('RepositoriesCtrl', RepositoriesCtrl);

  RepositoriesCtrl.$inject = ['$scope', '$http'];

  function RepositoriesCtrl($scope, $http) {
      var self = this;
      var isPagarme = new RegExp(/pagarme-ng-/);
      $scope.mainController.header.menuOpened = false;

      var gitPromise = $http.get('https://api.github.com/users/rfviolato/repos');

      gitPromise.success(getRepos);

      function getRepos(repos){
          
         self.repos = [];
         repos.forEach(function(repo){
            if(repo.owner.login === 'rfviolato'){
              if(!repo.fork){
                self.repos.push(repo);
              }else if(isPagarme.test(repo.name)){
                self.repos.push(repo);
              }
            }
        });

        $scope.$broadcast('repos-arrived');

      }
  }
