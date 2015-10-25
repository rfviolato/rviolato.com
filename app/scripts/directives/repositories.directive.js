'use strict';

/**
 * @ngdoc directive
 * @name rviolatocomApp.directive:repository
 * @description
 * # repository
 */
angular.module('rviolatocomApp')
  .directive('repositories', repositories);

  repositories.$inject = ['$timeout'];

  function repositories($timeout) {
    var directive = {
      link: postLink
    };

    return directive;

    function postLink($scope, $element) {
      var events = [
        $scope.$on('repos-arrived', reposArrived)
      ];
      
      $scope.$on('$destroy', destroy);

      function reposArrived(){
        $timeout(function() {
          $element.addClass('repos-arrived');
        }, 250);
      }

      function destroy() {
        events.forEach(function(unsubscribe) {
          unsubscribe();
        });
      }
    }
  }
