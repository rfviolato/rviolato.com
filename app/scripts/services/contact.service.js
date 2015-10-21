'use strict';

angular.module('rviolatocomApp')
    .service('contactSvc', contactService);

function contactService() {
	var self = this;

	self.sendingEmail = false;
	self.sendEmail = sendEmail;

	function sendEmail(){
	 if(!self.sendingEmail){            
	    var _name = self.name;
	    var _email = self.email;
	    var _message = self.message;

	    if(_name){
	       if(_email){
	          if(_message){
	             //Send the email
	             var _data = {
	                name: _name,
	                email: _email,
	                message: _message,
	             };
	             
	             var _promise = $http({
	                 method: 'post',
	                 url: 'enviaEmail.php',
	                 data: _data,
	                 headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	             });                     

	             self.sendingEmail = true;

	             _promise.success(emailSent);
	             _promise.error(emailError);
	             
	          }else{
	            if($scope.mainController.language === 'pt'){
	              $scope.mainController.texts.contact.formDescriptionText = 'Insira uma mensagem.';
	            }else{
	              $scope.mainController.texts.contact.formDescriptionText = 'Insert a message.';
	            }
	          }
	       }else{
	        if($scope.mainController.language === 'pt'){
	          $scope.mainController.texts.contact.formDescriptionText = 'Insirir email.';
	        }else{
	          $scope.mainController.texts.contact.formDescriptionText = 'Insert email.';
	        }
	       }
	    }else{
	      if($scope.mainController.language === 'pt'){
	        $scope.mainController.texts.contact.formDescriptionText = 'Insirir nome.';
	      }else{
	        $scope.mainController.texts.contact.formDescriptionText = 'Insert name.';
	      }
	    }            
	 }
	}

	function emailSent(){
	  self.sendingEmail = false;
	  self.name = '';
	  self.email = '';
	  self.message = '';

	  if($scope.mainController.language === 'pt'){
	    $scope.mainController.texts.contact.formDescriptionText = 'Sua mensagem foi enviada.';
	  }else{
	    $scope.mainController.texts.contact.formDescriptionText = 'Message sent.';
	  }
	}

	function emailError(){
	  self.sendingEmail = false;

	  if($scope.mainController.language === 'pt'){
	    $scope.mainController.texts.contact.formDescriptionText = 'Oops, algo errado aconteceu :/';
	  }else{
	    $scope.mainController.texts.contact.formDescriptionText = 'Oops, something wrong happened :/';
	  }
	}
}