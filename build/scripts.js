'use strict';

/**
 * @ngdoc overview
 * @name rviolatocomApp
 * @description
 * # rviolatocomApp
 *
 * Main module of the application.
 */
angular
  .module('rviolatocomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(false);
      $routeProvider
        .when('/projects', {
          templateUrl: 'views/projects.html',
          controller: 'ProjectsCtrl',
          controllerAs: 'projectsController',
        })
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl',
          controllerAs: 'contactController',
        })
        .when('/repositories', {
          templateUrl: 'views/repositories.html',
          controller: 'RepositoriesCtrl',
          controllerAs: 'repoCtrl',
        })
        .otherwise({
          redirectTo: '/'
        });

    }]);
'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the rviolatocomApp
 */
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

'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:HelloCtrl
 * @description
 * # HelloCtrl
 * Controller of the rviolatocomApp
 */

angular.module('rviolatocomApp')
  .controller('HelloCtrl', HelloCtrl)
  .config(config);

HelloCtrl.$inject = ['$scope', '$timeout'];

function HelloCtrl($scope, $timeout){
	var self = this;
	$scope.mainController.menuOpened = false;
	self.state = {
		greetings: false,
		ellipses: false,
	};
	var start = function(){
		$timeout(function(){
			self.state.greetings = true;
		},200);
		$timeout(function(){
			self.state.ellipses = true;
		}, 1700);
	};
	if($scope.mainController.pageLoaded){
		start();
	}else{
		$scope.$on('background-load', start);		
	}

}

config.$inject = ['$routeProvider'];

function config($routeProvider){
	$routeProvider	
	  .when('/', {
	    templateUrl: 'views/hello.html',
	    controller: 'HelloCtrl',
	    controllerAs: 'helloController',
	    resolve: HelloCtrl.init,
	  });
}
'use strict';


var multiLanguage = {
    /* PORTUGUESE TEXTS */
    pt: {
        menu: {
            navButtonTooltip: 'Navegue pelo Website',
            findButtonTooltip: 'Encontre-me',
            firstButtonTooltip: 'Repositórios',
            secondButtonTooltip: 'Trabalhos',
            thirdButtonTooltip: 'Entre em contato',
        },
        hello: {
            jobText: 'Desenvolvedor de Interface Web',
            firstButtonText: 'Repositórios',
            secondButtonText: 'Trabalhos',
            thirdButtonText: 'Entre em contato',
        },
        tools: {
            titleText: 'Ferramentas',
            descriptionText: 'Algumas coisas legais que utilizo',
        },
        repositories: {
            titleText: 'Repositórios',
            descriptionText: 'Alguns repos que venho contribuindo',
        },
        projects: {
            titleText: 'Trabalhos',
            descriptionText: 'Alguns projetos irados<br />em que venho trabalhando',
            nameTitleText: 'Nome',
            whenTitleText: 'Quando',
            descriptionTitleText: 'Sobre',
            closeButtonText: 'Fechar',
            visitWebsiteText: 'Acessar o site',
            firstProject: {
                when: 'Em standby',
                description: 'A Cachola é uma startup de educação cujo sou co-fundador.<br />Neste projeto eu e meus sócios temos a missão de desenvolver uma nova forma de compartilar conhecimento denso de uma forma bonita e simples. Nós focamos em um novo conceito de interface, desta forma o conteúdo é claro e simples de consumir.<br />Comecei utilizando jQuery na versão beta, porém atualmente a interface está implementada com AngularJS. O layout é responsivo para resoluções de tablet.',
            },
            secondProject: {
                when: 'Atualmente trabalhando nele',
                description: 'O Pagar.me é uma empresa de tecnologia voltada para meios de pagamento online.<br />Acreditamos que reunindo pessoas talentosas, inovação e código bem feito, podemos ter um produto imbatível no mercado',
            },
        },
        contact: {
            titleText: 'Contato',
            formTitleText: 'Fale comigo',
            formDescriptionText: 'Bora fazer coisas incríveis',
            buttonText: 'ENVIAR',
            nameFieldPlaceholder: 'Nome',
            messageFieldPlaceholder: 'Mensagem',
        },            
    },
    /* ENGLISH TEXTS */
    eng: {
        menu: {
            navButtonTooltip: 'Website Navigation',
            findButtonTooltip: 'Find me',
            firstButtonTooltip: 'Repositories',
            secondButtonTooltip: 'Projects',
            thirdButtonTooltip: 'Get in touch',
        },
        hello: {
            jobText: 'Web Interface Developer',
            firstButtonText: 'Repositories',
            secondButtonText: 'Projects',
            thirdButtonText: 'Get in touch',
        },
        tools: {
            titleText: 'Tools',
            descriptionText: 'Some neat stuff i work with',
        },
        repositories: {
            titleText: 'Repositories',
            descriptionText: 'Some repos that i have been contributing to',
        },
        projects: {
            titleText: 'Jobs',
            descriptionText: 'Some cool projects <br />that i have been working on',
            nameTitleText: 'Name',
            whenTitleText: 'When',
            descriptionTitleText: 'About',
            closeButtonText: 'Close',
            visitWebsiteText: 'Visit website',
            firstProject: {
                when: 'On standby',
                description: 'Cachola is a education startup wich im one of the co-founders.<br />On this project me and my partners have the mission to develop a new way to share dense knowledge within an easy and pretty way. We focus on a new concept of interface, so the content is clear and easy to consume.<br />I started it with jQuery on the beta version, but currently its done with AngularJs and i try to focus on user-firendly functionality and keeping most of the animations on CSS. Currently the layout is tablet-resolutions responsive.',
            },
            secondProject: {
                when: 'Currently working on it',
                description: 'Pagar.me is an online payment company.<br />We believe that by putting together the most talented people, inovation and good code, we can have the best product on the market.',
            },
        },
        contact: {
            titleText: 'Contact',
            formTitleText: 'Get in touch',
            formDescriptionText: 'Let\'s do awesome things',
            buttonText: 'SEND',
            nameFieldPlaceholder: 'Name',
            messageFieldPlaceholder: 'Message',
        },
    },
};



/**
 * @ngdoc function
 * @name rviolatocomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rviolatocomApp
 */
angular.module('rviolatocomApp')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$rootScope', '$scope', '$location'];

  function MainCtrl($rootScope, $scope, $location) {
      var vm = this;
      vm.language = 'eng';
      vm.texts = multiLanguage.eng;
      vm.currentPage = $location.path().replace('/', '');
      vm.pageLoaded = false;
      vm.header = {
          menuOpened: false,
          openHeaderMenu: openHeaderMenu,
      };
  
      vm.setLanguage = setLenguage;
      var $routeChangeStart = $rootScope.$on('$routeChangeStart', routeChangeStart);
      var $routeChangeSuccess = $rootScope.$on( '$routeChangeSuccess', routeChangeSuccess);
      $scope.$on('background-load', bgLoad);
      $scope.$on('$destroy', destroy);
  

      function setLenguage(lang){
          switch(lang){
              case 'eng':
                  vm.texts = multiLanguage.eng;
                  vm.language = 'eng';
              break;
              case 'pt':
                  vm.texts = multiLanguage.pt;
                  vm.language = 'pt';
              break;
          }
      }

      function routeChangeStart(){
        vm.loadingRoutePage = true;
      }

      function routeChangeSuccess() {
        vm.loadingRoutePage = false;
        vm.currentPage = $location.path().replace('/', '');
      }

      function bgLoad(){
        vm.pageLoaded = true;
      }

      function openHeaderMenu(menu){
          if(vm.header.menuOpened === menu){
              vm.header.menuOpened = '';
          }else{
              vm.header.menuOpened = menu;
          }
      }

      function destroy() {
        $routeChangeStart();
        $routeChangeSuccess();
      }
    }

'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the rviolatocomApp
 */
angular.module('rviolatocomApp')
  .controller('ProjectsCtrl', ProjectsCtrl);

  ProjectsCtrl.$inject = ['$scope', '$timeout'];

  function ProjectsCtrl($scope, $timeout) {
      var vm = this;

      $scope.mainController.header.menuOpened = false;

      vm.projects = {
          openedProject: -1,
          isOpened: false,
          phaseOne: false,
          phaseTwo: false,
      };
      vm.openProject = openProject;
      vm.closeProject = closeProject;

      function openProject(index){
          vm.projects.openedProject = index;
          vm.projects.phaseOne = true;
          vm.projects.isOpened = true;
          $timeout(function(){
              vm.projects.phaseTwo = true;
          }, 750);
      }

      function closeProject(){
          vm.projects.phaseTwo = false;
          vm.projects.isOpened = false;
          $timeout(function(){
              vm.projects.openedProject = -1;
              vm.projects.phaseOne = false;
          },750);
      }
    }

'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:RepositoriesCtrl
 * @description
 * # RepositoriesCtrl
 * Controller of the rviolatocomApp
 */
angular.module('rviolatocomApp')
  .controller('RepositoriesCtrl', RepositoriesCtrl);

  RepositoriesCtrl.$inject = ['$scope', '$http'];

  function RepositoriesCtrl($scope, $http) {
      var self = this;
      var isPagarme = new RegExp(/pagarme-ng-/);
      $scope.mainController.header.menuOpened = false;

      var gitPromise = $http.get('https://api.github.com/users/rfviolato/repos');

      gitPromise.success(getRepos);

      function getRepos(repos){
          
         self.repos = [];
         repos.forEach(function(repo){
            if(repo.owner.login === 'rfviolato'){
              if(!repo.fork){
                self.repos.push(repo);
              }else if(isPagarme.test(repo.name)){
                self.repos.push(repo);
              }
            }
        });

        $scope.$broadcast('repos-arrived');

      }
  }

'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller of the rviolatocomApp
 */

 angular.module('rviolatocomApp')
  .controller('ToolsCtrl', ToolsController)
  .config(config);

var ToolsController = ['$scope'];

function ToolsController($scope){
	$scope.mainController.header.menuOpened = false;
}

config.$inject = ['$routeProvider'];

function config($routeProvider){
	$routeProvider
      .when('/tools', {
        templateUrl: 'views/tools.html',
        controller: 'ToolsCtrl',
        controllerAs: 'toolsController',
      });
}

'use strict';

/**
 * @ngdoc directive
 * @name rviolatocomApp.directive:background
 * @description
 * # background
 */
angular.module('rviolatocomApp')
  .directive('background', function ($rootScope) {
    return {
      restrict: 'C',
      replace: true,
      link: function postLink(scope, element) {
        var url = window.getComputedStyle(element[0]).backgroundImage
          .replace('url(', '')
          .replace(')', '')
          .replace(/"/g, '');
        var dummyImg = document.createElement('img');
        var load = function(){
            element.css('background-image', 'url('+url+')');
            element.addClass('loaded');
            $rootScope.$broadcast('background-load', {
              status: 'loaded',
            });
        };
        var error = function(){
        	console.error('background image loading error :/');
        	$rootScope.$broadcast('background-load', {
        		status: 'error',
        	});        	
        };

        dummyImg.addEventListener('load', load);
        dummyImg.addEventListener('error', error);
        dummyImg.src = url;

      	if (dummyImg.complete) {
  			 load();
      	}
      }
    };
  });

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

'use strict';

/**
 * @ngdoc directive
 * @name rviolatocomApp.directive:tooltipTrigger
 * @description
 * # tooltipTrigger
 */
angular.module('rviolatocomApp')
  .directive('tooltipTrigger', function ($rootScope) {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        element.on('mouseenter', function(){
        	$rootScope.$broadcast('tooltip', {
        		show: true,
        		text: attrs.tooltipText,
        	});
        });

        element.on('mouseleave click', function(){
        	$rootScope.$broadcast('tooltip', {
        		show: false,
        	});        	
        });
      }
    };
  });

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

/*
* Symbolset
* www.symbolset.com
* Copyright © 2013 Oak Studios LLC
*
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-standard.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android ([1-2]|4\.[2-9].*Version\/4)\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {

  if (/Android 4\.[2-9].*Version\/4/.test(navigator.userAgent)) {
    var ss_android = document.createElement('style');
    ss_android.innerHTML = '.ss-icon,[class^="ss-"],[class*=" ss-"],[class^="ss-"]:before,[class*=" ss-"]:before,[class^="ss-"].right:after[class*=" ss-"].right:after{text-rendering:auto!important}';
    document.body.appendChild(ss_android);
  }

  var ss_set={'notifications disabled':'\uD83D\uDD15','notification disabled':'\uD83D\uDD15','notificationsdisabled':'\uD83D\uDD15','notificationdisabled':'\uD83D\uDD15','telephone disabled':'\uE300','telephonedisabled':'\uE300','writing disabled':'\uE071','remove calendar':'\uF071','calendar remove':'\uF071','calendar delete':'\uF073','writingdisabled':'\uE071','delete calendar':'\uF073','pencil disabled':'\uE071','calendarremove':'\uF071','phone disabled':'\uE300','check calendar':'\uF072','navigate right':'\u25BB','pencildisabled':'\uE071','removecalendar':'\uF071','calendar check':'\uF072','deletecalendar':'\uF073','download cloud':'\uEB00','battery medium':'\uEA11','calendardelete':'\uF073','cloud download':'\uEB00','medium battery':'\uEA11','ellipsis chat':'\uE399','mediumbattery':'\uEA11','bell disabled':'\uD83D\uDD15','clouddownload':'\uEB00','shopping cart':'\uE500','calendarcheck':'\uF072','phonedisabled':'\uE300','female avatar':'\uD83D\uDC67','notifications':'\uD83D\uDD14','call disabled':'\uE300','battery empty':'\uEA13','navigateright':'\u25BB','empty battery':'\uEA13','batterymedium':'\uEA11','checkcalendar':'\uF072','navigate down':'\uF501','navigate left':'\u25C5','downloadcloud':'\uEB00','navigateleft':'\u25C5','ellipsischat':'\uE399','navigatedown':'\uF501','batteryempty':'\uEA13','battery high':'\uEA10','notification':'\uD83D\uDD14','battery full':'\uD83D\uDD0B','calldisabled':'\uE300','femaleavatar':'\uD83D\uDC67','rotate right':'\u21BB','calendar add':'\uF070','high battery':'\uEA10','emptybattery':'\uEA13','cloud upload':'\uEB40','direct right':'\u25B9','full battery':'\uD83D\uDD0B','add calendar':'\uF070','upload cloud':'\uEB40','belldisabled':'\uD83D\uDD15','fast forward':'\u23E9','skip forward':'\u23ED','mobile phone':'\uD83D\uDCF1','shoppingcart':'\uE500','direct left':'\u25C3','low battery':'\uEA12','skipforward':'\u23ED','rotateright':'\u21BB','male avatar':'\uD83D\uDC64','direct down':'\u25BE','videocamera':'\uD83D\uDCF9','female user':'\uD83D\uDC67','information':'\u2139','thumbs down':'\uD83D\uDC4E','photographs':'\uD83C\uDF04','calendaradd':'\uF070','rotate left':'\u21BA','high volume':'\uD83D\uDD0A','batteryhigh':'\uEA10','credit card':'\uD83D\uDCB3','batteryfull':'\uD83D\uDD0B','navigate up':'\uF500','dollar sign':'\uD83D\uDCB2','fastforward':'\u23E9','mobilephone':'\uD83D\uDCF1','battery low':'\uEA12','addcalendar':'\uF070','fullbattery':'\uD83D\uDD0B','uploadcloud':'\uEB40','delete date':'\uF073','remove date':'\uF071','volume high':'\uD83D\uDD0A','directright':'\u25B9','cloudupload':'\uEB40','highbattery':'\uEA10','navigation':'\uE670','smartphone':'\uD83D\uDCF1','screenshot':'\u2316','dollarsign':'\uD83D\uDCB2','creditcard':'\uD83D\uDCB3','hard drive':'\uE7B0','femaleuser':'\uD83D\uDC67','maleavatar':'\uD83D\uDC64','removedate':'\uF071','microphone':'\uD83C\uDFA4','low volume':'\uD83D\uDD09','volume low':'\uD83D\uDD09','highvolume':'\uD83D\uDD0A','check date':'\uF072','volumehigh':'\uD83D\uDD0A','deletedate':'\uF073','cell phone':'\uD83D\uDCF1','directions':'\uE672','photograph':'\uD83C\uDF04','half heart':'\uE1A0','thumbsdown':'\uD83D\uDC4E','disapprove':'\uD83D\uDC4E','lowbattery':'\uEA12','down right':'\u2B0A','batterylow':'\uEA12','thumbnails':'\uE9A3','navigateup':'\uF500','attachment':'\uD83D\uDCCE','visibility':'\uD83D\uDC40','pull quote':'\u201C','descending':'\u25BE','directdown':'\u25BE','directleft':'\u25C3','connection':'\uEB85','rotateleft':'\u21BA','eyedropper':'\uE200','volumelow':'\uD83D\uDD09','stopwatch':'\u23F1','warehouse':'\uE602','paperclip':'\uD83D\uDCCE','backspace':'\u232B','ascending':'\u25B4','half star':'\uE1A1','cellphone':'\uD83D\uDCF1','lightbulb':'\uD83D\uDCA1','thumbs up':'\uD83D\uDC4D','down left':'\u2B0B','newspaper':'\uD83D\uDCF0','direct up':'\u25B4','checkdate':'\uF072','halfheart':'\uE1A0','bar chart':'\uD83D\uDCCA','harddrive':'\uE7B0','male user':'\uD83D\uDC64','pie chart':'\uE570','downright':'\u2B0A','skip back':'\u23EE','musicnote':'\u266B','dashboard':'\uF000','briefcase':'\uD83D\uDCBC','pullquote':'\u201C','telephone':'\uD83D\uDCDE','checkmark':'\u2713','lowvolume':'\uD83D\uDD09','buildings':'\uD83C\uDFE2','crosshair':'\u2316','open book':'\uD83D\uDCD6','add date':'\uF070','notebook':'\uD83D\uDCD3','document':'\uD83D\uDCC4','skipback':'\u23EE','typeface':'\uED01','transfer':'\u21C6','redirect':'\u21AA','computer':'\uD83D\uDCBB','contract':'\uEE01','question':'\u2753','sign out':'\uEE02','download':'\uEB01','pictures':'\uD83C\uDF04','subtract':'\u002D','settings':'\u2699','database':'\uE7A0','location':'\uE6D0','signpost':'\uE672','navigate':'\uE670','calendar':'\uD83D\uDCC5','barchart':'\uD83D\uDCCA','openbook':'\uD83D\uDCD6','maleuser':'\uD83D\uDC64','ellipsis':'\u2026','envelope':'\u2709','facetime':'\uE320','end call':'\uE300','halfstar':'\uE1A1','favorite':'\u22C6','thumbsup':'\uD83D\uDC4D','up right':'\u2B08','bookmark':'\uD83D\uDD16','keywords':'\uE100','downleft':'\u2B0B','trashcan':'\uE0D0','insecure':'\uD83D\uDD13','unlocked':'\uD83D\uDD13','previous':'\u25C5','directup':'\u25B4','zoom out':'\uE003','dropdown':'\u25BE','piechart':'\uE570','caution':'\u26D4','desktop':'\uD83D\uDCBB','zoom in':'\uE002','display':'\uD83D\uDCBB','monitor':'\uD83D\uDCBB','windows':'\uE202','warning':'\u26A0','descend':'\u25BE','package':'\uD83D\uDCE6','upright':'\u2B08','droplet':'\uD83D\uDCA7','keyword':'\uE100','printer':'\u2399','private':'\uD83D\uDD12','avatars':'\uD83D\uDC65','dictate':'\uD83C\uDFA4','battery':'\uD83D\uDD0B','zoomout':'\uE003','checked':'\u2713','speaker':'\uD83D\uDD08','comment':'\uD83D\uDCAC','forward':'\u27A1','up left':'\u2B09','approve':'\uD83D\uDC4D','endcall':'\uE300','compass':'\uE671','retweet':'\uF600','loading':'\uEB83','shuffle':'\uD83D\uDD00','syncing':'\uEB82','visible':'\uD83D\uDC40','airplay':'\uE800','adddate':'\uF070','picture':'\uD83C\uDF04','dislike':'\uD83D\uDC4E','compose':'\uD83D\uDCDD','refresh':'\u21BB','columns':'\uE9A2','signout':'\uEE02','log out':'\uEE02','target':'\u25CE','cursor':'\uE001','search':'\uD83D\uDD0E','zoomin':'\uE002','tablet':'\uEA01','laptop':'\uEA00','funnel':'\uE9B0','upload':'\uEB41','attach':'\uD83D\uDCCE','filter':'\uE9B0','pencil':'\u270E','ascend':'\u25B4','eraser':'\u2710','locked':'\uD83D\uDD12','secure':'\uD83D\uDD12','unlock':'\uD83D\uDD13','replay':'\u21BA','public':'\uD83D\uDD13','repeat':'\uD83D\uDD01','folder':'\uD83D\uDCC1','upleft':'\u2B09','iphone':'\uD83D\uDCF1','tagged':'\uE100','rewind':'\u23EA','record':'\u25CF','layout':'\uEDA0','action':'\uEE00','expand':'\u2922','sample':'\uE200','layers':'\uE202','videos':'\uD83D\uDCF9','photos':'\uD83C\uDF04','stroke':'\uE241','logout':'\uEE02','images':'\uD83C\uDF04','hyphen':'\u002D','remove':'\u002D','camera':'\uD83D\uDCF7','volume':'\uD83D\uDD08','delete':'\u2421','avatar':'\uD83D\uDC64','locate':'\uE670','mobile':'\uD83D\uDCF1','pause':'\uE8A0','zelda':'\uE1A0','write':'\u270E','nodes':'\uEB85','merge':'\uEB81','alert':'\u26A0','video':'\uD83D\uDCF9','world':'\uD83C\uDF0E','print':'\u2399','trash':'\uE0D0','photo':'\uD83C\uDF04','right':'\u27A1','image':'\uD83C\uDF04','phone':'\uD83D\uDCDE','reply':'\u21A9','heart':'\u2665','minus':'\u002D','erase':'\u2710','quote':'\u201C','check':'\u2713','sound':'\uD83D\uDD08','flask':'\uF4C0','share':'\uEE00','close':'\u2421','email':'\u2709','inbox':'\uD83D\uDCE5','visit':'\uEE00','audio':'\u266B','music':'\u266B','users':'\uD83D\uDC65','price':'\uD83D\uDCB2','house':'\u2302','timer':'\u23F1','cloud':'\u2601','eject':'\u23CF','earth':'\uD83C\uDF0E','globe':'\uD83C\uDF0E','clock':'\u23F2','list':'\uED50','time':'\u23F2','cell':'\uD83D\uDCF1','zoom':'\uE002','date':'\uD83D\uDCC5','home':'\u2302','ipad':'\uEA01','bell':'\uD83D\uDD14','cost':'\uD83D\uDCB2','cart':'\uE500','view':'\uD83D\uDC40','gear':'\u2699','user':'\uD83D\uDC64','talk':'\uD83D\uDCAC','chat':'\uD83D\uDCAC','look':'\uD83D\uDC40','fork':'\uEB80','mail':'\u2709','send':'\uE350','link':'\uD83D\uDD17','move':'\uE070','call':'\uD83D\uDCDE','plus':'\u002B','exit':'\uEE02','fill':'\uE240','info':'\u2139','crop':'\uE201','play':'\u25B6','star':'\u22C6','help':'\u2753','work':'\uD83D\uDCBC','stop':'\u25A0','drop':'\uD83D\uDCA7','love':'\u2665','edit':'\u270E','rows':'\uE9A1','city':'\uD83C\uDFE2','like':'\uD83D\uDC4D','redo':'\u21BB','flag':'\u2691','font':'\uED01','tags':'\uE100','down':'\u2B07','grid':'\uE9A0','text':'\uED00','left':'\u2B05','back':'\u2B05','skip':'\u23ED','page':'\uD83D\uDCC4','news':'\uD83D\uDCF0','sync':'\uEB82','file':'\uD83D\uDCC4','wifi':'\uEB84','next':'\u25BB','undo':'\u21BA','book':'\uD83D\uDCD5','lock':'\uD83D\uDD12','idea':'\uD83D\uDCA1','key':'\uD83D\uDD11','tag':'\uE100','fax':'\uD83D\uDCE0','map':'\uE673','out':'\uEE00','rss':'\uE310','add':'\u002B','ban':'\uD83D\uDEAB','cog':'\u2699','eye':'\uD83D\uDC40','hdd':'\uE7B0','box':'\uD83D\uDCE6','pin':'\uD83D\uDCCD','mic':'\uD83C\uDFA4','up':'\u2B06'};

  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set;
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };

  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

    var ss_legacy = function(node) {

      if (!node instanceof Object) return false;

      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };

      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }

    };

    var ss_getElementsByClassName = function(node, classname) {
      if (document.querySelectorAll) {
        return document.querySelectorAll('.'+classname);
      }
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };

    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) {
        return ss_icons[v.toLowerCase()];
      });
    };

    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });

  }

};
