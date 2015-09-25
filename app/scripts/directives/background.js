'use strict';

/**
 * @ngdoc directive
 * @name rviolatocomApp.directive:background
 * @description
 * # background
 */
angular.module('rviolatocomApp')
  .directive('background', background);

  background.$inject = ['$rootScope'];

  function background($rootScope) {
    var directive = {
      restrict: 'C',
      replace: true,
      link: postLink
    };

    return directive;

    function postLink(scope, element) {
      var url = window.getComputedStyle(element[0]).backgroundImage
        .replace('url(', '')
        .replace(')', '')
        .replace(/"/g, '');
      var dummyImg = document.createElement('img');
      dummyImg.addEventListener('load', load);
      dummyImg.addEventListener('error', error);
      dummyImg.src = url;

      if (dummyImg.complete) {
       load();
      }

      function load(){
          element.css('background-image', 'url('+url+')');
          element.addClass('loaded');
          $rootScope.$broadcast('background-load', {
            status: 'loaded',
          });
      }

      function error(){
        console.error('background image loading error :/');
        $rootScope.$broadcast('background-load', {
          status: 'error',
        });
      }
    }
  }
