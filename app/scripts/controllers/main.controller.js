'use strict';

angular.module('rviolatocomApp')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$rootScope', '$scope', 'mainSvc', '$location'];

  function MainCtrl($rootScope, $scope, mainSvc, $location) {
      var vm = this;
      vm.currentPage = mainSvc.currentPage;
      vm.pageLoaded = mainSvc.pageLoaded;
      vm.header = mainSvc.header
      vm.setLanguage = mainSvc.setLanguage;
      vm.texts = mainSvc.texts;
      vm.language = mainSvc.language;

      var events = [
        $rootScope.$on('$routeChangeStart', routeChangeStart),
        $rootScope.$on( '$routeChangeSuccess', routeChangeSuccess),
        $scope.$on('background-load', bgLoad)
      ];

      $scope.$on('$destroy', destroy);

      //start with english texts
      mainSvc.setLanguage('eng');

      function routeChangeStart(){
        vm.loadingRoutePage = true;
      }

      function routeChangeSuccess() {
        vm.loadingRoutePage = false;
        vm.currentPage = $location.path().replace('/', '');
      }

      function bgLoad(){
        $scope.$apply(function() {
          vm.pageLoaded = true;
        });
      }

      function destroy() {
        events.forEach(function(unsubscribe) {
          unsubscribe();
        });
      }
    }
