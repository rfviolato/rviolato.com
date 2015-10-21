'use strict';

angular.module('rviolatocomApp')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$rootScope', '$scope', '$timeout', 'mainSvc', '$location'];

  function MainCtrl($rootScope, $scope, $timeout, mainSvc, $location) {
      var vm = this;

      vm.global = mainSvc;

      var events = [
        $rootScope.$on('$routeChangeStart', routeChangeStart),
        $rootScope.$on( '$routeChangeSuccess', routeChangeSuccess),
        $scope.$on('background-load', bgLoad)
      ];

      $scope.$on('$destroy', destroy);

      //start with english texts
      mainSvc.setLanguage('eng');

      function routeChangeStart(){
        mainSvc.loadingRoutePage = true;
      }

      function routeChangeSuccess() {
        mainSvc.loadingRoutePage = false;
        mainSvc.currentPage = $location.path().replace('/', '');
      }

      function bgLoad(){
        $timeout(function() {
          $scope.$apply(function() {
            mainSvc.pageLoaded = true;
          });
        });
      }

      function destroy() {
        events.forEach(function(unsubscribe) {
          unsubscribe();
        });
      }
    }
