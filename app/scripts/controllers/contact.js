'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the rviolatocomApp
 */
angular.module('rviolatocomApp')
  .controller('ContactCtrl', ['$scope', '$http', function ($scope, $http) {
  	  var self = this;
      $scope.mainController.header.menuOpened = false;
      self.sendingEmail = false;
      self.sendEmail = function(){
         if(!self.sendingEmail){            
            var _name = self.name;
            var _email = self.email;
            var _message = self.message;
            var _emailSent = function(){
                self.sendingEmail = false;
                self.name = '';
                self.email = '';
                self.message = '';
                if($scope.mainController.language === 'pt'){
					$scope.mainController.texts.contact.formDescriptionText = 'Sua mensagem foi enviada.';
                }else{
                	$scope.mainController.texts.contact.formDescriptionText = 'Message sent.';
                }
            };
            var _emailError = function(){
                self.sendingEmail = false;
                if($scope.mainController.language === 'pt'){
					$scope.mainController.texts.contact.formDescriptionText = 'Oops, algo errado aconteceu :/';
                }else{
                	$scope.mainController.texts.contact.formDescriptionText = 'Oops, something wrong happened :/';
                }
            };
            if(_name){
               if(_email){
                  if(_message){
                     //Send the email
                     var _data = {
                        name: _name,
                        email: _email,
                        message: _message,
                     };
                     console.log(_data);
                     var _promise = $http({
                         method: 'post',
                         url: 'enviaEmail.php',
                         data: _data,
                         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                     });                     
                     //var _promise = $http.post('enviaEmail.php', _data);
                     self.sendingEmail = true;

                     _promise.success(_emailSent);
                     _promise.error(_emailError);
                     // ---- ---- ----
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
      };
    }]);
