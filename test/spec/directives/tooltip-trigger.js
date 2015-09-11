'use strict';

describe('Directive: tooltipTrigger', function () {

  // load the directive's module
  beforeEach(module('rviolatocomApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tooltip-trigger></tooltip-trigger>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tooltipTrigger directive');
  }));
});
