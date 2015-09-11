'use strict';

/**
 * @ngdoc directive
 * @name rviolatocomApp.directive:repository
 * @description
 * # repository
 */
angular.module('rviolatocomApp')
  .directive('repositories', function ($timeout) {
    return {
      link: function postLink($scope, $element) {//scope, element, attrs

        $scope.$on('repos-arrived', function(){
          $timeout(function(){
            $element.addClass('repos-arrived');
          }, 500);
          $timeout(function(){
            var h = $element.prop('offsetHeight');
            $element.css('height', h + 'px');
          });
        });

      }
    };
  });
