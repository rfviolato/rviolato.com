'use strict';

angular.module('rviolatocomApp')
  .controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['mainSvc', 'contactSvc'];

  function ContactCtrl(mainSvc, contactSvc) {
    var vm = this;
    mainSvc.header.menuOpened = false;
  }
