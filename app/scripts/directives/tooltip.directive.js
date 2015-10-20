'use strict';

/**
 * @ngdoc directive
 * @name rviolatocomApp.directive:tooltip
 * @description
 * # tooltip
 */
angular.module('rviolatocomApp')
  .directive('tooltip', tooltip);

  function tooltip() {
    var directive = {
      restrict: 'C',
      link: postLink
    };

    return directive;

    function postLink($scope, element) {
        var x = 0;
        var y = 0;
        $scope.tooltip = {
          showing: false,
        };
        var $tooltip = $scope.$on('tooltip', tooltip);
        $scope.$on('$destroy', destroy);
        document.addEventListener('mousemove', mousemove);

        function mousemove(_event){
          x = _event.pageX || _event.clientX;
          y = _event.pageY || _event.clientY;
          if($scope.tooltip.showing){
            moveTooltip();
          }
        }

        function tooltip(_event, _data){
          if(_data.show){
            element.text(_data.text);
            moveTooltip();
            element.addClass('show');
            $scope.$apply(function(){
              $scope.tooltip.showing = true;
            });
          }else{
            element.removeClass('show');
            $scope.$apply(function(){
              $scope.tooltip.showing = false;
            });
          }
        }

        function moveTooltip(){
          var _width = element.prop('offsetWidth');
          var _height = element.prop('offsetHeight');
          element.css({
            'top': (y + (_height) - 5)+'px',
            'left': (x - (_width/2) + 7)+'px',
          });
        }

        function destroy() {
          $tooltip();
        }
      }
  }
