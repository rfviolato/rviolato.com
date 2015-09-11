'use strict';

/**
 * @ngdoc directive
 * @name rviolatocomApp.directive:tooltip
 * @description
 * # tooltip
 */
angular.module('rviolatocomApp')
  .directive('tooltip', function () {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
      	var x = 0;
      	var y = 0;
      	scope.tooltip = {
			showing: false,
      	};
      	var moveTooltip = function(){
    		var _width = element.prop('offsetWidth');
    		var _height = element.prop('offsetHeight');      		
    		element.css({
    			'top': (y + (_height) - 5)+'px',
    			'left': (x - (_width/2) + 7)+'px',
    		});
      	};
        document.addEventListener('mousemove', function(_event){
        	x = _event.pageX || _event.clientX;
        	y = _event.pageY || _event.clientY;
        	if(scope.tooltip.showing){
        		moveTooltip();
        	}
        });
        scope.$on('tooltip', function(_event, _data){
        	if(_data.show){
				element.text(_data.text);
        		moveTooltip();
        		element.addClass('show');
        		scope.$apply(function(){
        			scope.tooltip.showing = true;
        		});
        	}else{
        		element.removeClass('show');
        		scope.$apply(function(){
        			scope.tooltip.showing = false;
        		});
        	}
        });

      }
    };
  });
