'use strict';

describe('Controller: ProjetosCtrl', function () {

  // load the controller's module
  beforeEach(module('rviolatocomApp'));

  var ProjetosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjetosCtrl = $controller('ProjetosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
