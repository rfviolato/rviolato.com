'use strict';

/**
 * @ngdoc directive
 * @name rviolatocomApp.directive:background
 * @description
 * # background
 */
angular.module('rviolatocomApp')
  .directive('background', function ($rootScope) {
    return {
      restrict: 'C',
      replace: true,
      link: function postLink(scope, element) {
        var url = window.getComputedStyle(element[0]).backgroundImage
          .replace('url(', '')
          .replace(')', '')
          .replace(/"/g, '');
        var dummyImg = document.createElement('img');
        var load = function(){
            element.css('background-image', 'url('+url+')');
            element.addClass('loaded');
            $rootScope.$broadcast('background-load', {
              status: 'loaded',
            });
        };
        var error = function(){
        	console.error('background image loading error :/');
        	$rootScope.$broadcast('background-load', {
        		status: 'error',
        	});        	
        };

        dummyImg.addEventListener('load', load);
        dummyImg.addEventListener('error', error);
        dummyImg.src = url;

      	if (dummyImg.complete) {
  			 load();
      	}
      }
    };
  });
