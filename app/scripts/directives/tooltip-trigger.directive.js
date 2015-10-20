'use strict';

/**
 * @ngdoc directive
 * @name rviolatocomApp.directive:tooltipTrigger
 * @description
 * # tooltipTrigger
 */
angular.module('rviolatocomApp')
  .directive('tooltipTrigger', function ($rootScope) {
    var directive = {
      restrict: 'C',
      link: postLink
    };

    return directive;

    function postLink(scope, element, attrs) {
      element.on('mouseenter', mouseenter);

      element.on('mouseleave click', mouseleave);

      function mouseleave(){
        $rootScope.$broadcast('tooltip', {
          show: false,
        });
      }

      function mouseenter(){
        $rootScope.$broadcast('tooltip', {
          show: true,
          text: attrs.tooltipText,
        });
      }
    }
  });
