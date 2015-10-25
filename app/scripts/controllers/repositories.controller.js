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

      function reposArrived(repos){
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
