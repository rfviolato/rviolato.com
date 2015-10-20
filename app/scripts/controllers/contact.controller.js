'use strict';

angular.module('rviolatocomApp')
  .controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['$scope', '$http'];

  function ContactCtrl($scope, $http) {
      var vm = this;
      $scope.mainController.header.menuOpened = false;
      vm.sendingEmail = false;
      vm.sendEmail = sendEmail;

      function sendEmail(){
         if(!vm.sendingEmail){            
            var _name = vm.name;
            var _email = vm.email;
            var _message = vm.message;

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

                     vm.sendingEmail = true;

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
          vm.sendingEmail = false;
          vm.name = '';
          vm.email = '';
          vm.message = '';

          if($scope.mainController.language === 'pt'){
            $scope.mainController.texts.contact.formDescriptionText = 'Sua mensagem foi enviada.';
          }else{
            $scope.mainController.texts.contact.formDescriptionText = 'Message sent.';
          }
      }

      function emailError(){
          vm.sendingEmail = false;

          if($scope.mainController.language === 'pt'){
            $scope.mainController.texts.contact.formDescriptionText = 'Oops, algo errado aconteceu :/';
          }else{
            $scope.mainController.texts.contact.formDescriptionText = 'Oops, something wrong happened :/';
          }
      }
    }
