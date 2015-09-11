'use strict';

/**
 * @ngdoc directive
 * @name rviolatocomApp.directive:tooltipTrigger
 * @description
 * # tooltipTrigger
 */
angular.module('rviolatocomApp')
  .directive('tooltipTrigger', function ($rootScope) {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        element.on('mouseenter', function(){
        	$rootScope.$broadcast('tooltip', {
        		show: true,
        		text: attrs.tooltipText,
        	});
        });

        element.on('mouseleave click', function(){
        	$rootScope.$broadcast('tooltip', {
        		show: false,
        	});        	
        });
      }
    };
  });
