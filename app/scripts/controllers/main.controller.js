'use strict';

angular.module('rviolatocomApp')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$rootScope', '$scope', 'mainSvc', '$location'];

  function MainCtrl($rootScope, $scope, mainSvc, $location) {
      var vm = this;
      var events = [
        $rootScope.$on('$routeChangeStart', routeChangeStart),
        $rootScope.$on( '$routeChangeSuccess', routeChangeSuccess),
        $scope.$on('background-load', bgLoad)
      ];

      $scope.$on('$destroy', destroy);

      //start with english texts
      mainSvc.setLanguage('eng');

      vm = mainSvc;

      function routeChangeStart(){
        vm.loadingRoutePage = true;
      }

      function routeChangeSuccess() {
        vm.loadingRoutePage = false;
        mainSvc.currentPage = $location.path().replace('/', '');
      }

      function bgLoad(){
        $scope.$apply(function() {
          mainSvc.pageLoaded = true;
        });
      }

      function destroy() {
        events.forEach(function(unsubscribe) {
          unsubscribe();
        });
      }
    }
