'use strict';

angular.module('rviolatocomApp')
  .controller('RepositoriesCtrl', RepositoriesCtrl);

  RepositoriesCtrl.$inject = ['$scope', 'mainSvc', 'reposSvc'];

  function RepositoriesCtrl($scope, mainSvc, reposSvc) {
      var self = this;
      var isPagarme = new RegExp(/pagarme-ng-/);
      mainSvc.header.menuOpened = false;

      reposSvc.getRepos.success(reposArrived);

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
