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
        $scope.$apply(function() {
          vm.pageLoaded = true;
        });
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
