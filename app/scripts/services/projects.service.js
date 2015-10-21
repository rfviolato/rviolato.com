'use strict';

angular.module('rviolatocomApp')
    .service('projectsSvc', projectsService);

projectsService.$inject = ['$timeout'];

function projectsService($timeout) {
	var self = this;

	self.projects = {
	  openedProject: -1,
	  isOpened: false,
	  phaseOne: false,
	  phaseTwo: false,
	};
	self.openProject = openProject;
	self.closeProject = closeProject;

	function openProject(index){
	  self.projects.openedProject = index;
	  self.projects.phaseOne = true;
	  self.projects.isOpened = true;
	  $timeout(function(){
	      self.projects.phaseTwo = true;
	  }, 750);
	}

	function closeProject(){
	  self.projects.phaseTwo = false;
	  self.projects.isOpened = false;
	  $timeout(function(){
	      self.projects.openedProject = -1;
	      self.projects.phaseOne = false;
	  }, 750);
	}
}