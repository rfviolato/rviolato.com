'use strict';

angular.module('rviolatocomApp')
  .controller('RepositoriesCtrl', RepositoriesCtrl);

  RepositoriesCtrl.$inject = ['$scope', 'mainSvc', 'repos'];

  function RepositoriesCtrl($scope, mainSvc, repos) {
      var self = this;
      var isPagarme = new RegExp(/pagarme-ng-/);
      mainSvc.header.menuOpened = false;
      
      $scope.$watch(function() {
        return repos.data;
      }, function(repos) {
        if(repos){
          self.repos = repos;
          $scope.$broadcast('repos-arrived');
        }
      });
  }
