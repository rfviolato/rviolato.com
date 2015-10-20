'use strict';

angular.module('rviolatocomApp')
    .service('mainSvc', mainService);

mainService.$inject = ['$location'];

function mainService($location) {
    var self = this;
    var multiLanguage = new Lenguages();

    self.currentPage = $location.path().replace('/', '');
    self.pageLoaded = false;
    self.setLanguage = setLanguage;
    self.header = {
      menuOpened: false,
      openHeaderMenu: openHeaderMenu,
    };

    function openHeaderMenu(menu){
      if(self.header.menuOpened === menu){
          self.header.menuOpened = '';
      }else{
          self.header.menuOpened = menu;
      }
    }

    function setLanguage(lang){
      switch(lang){
          case 'eng':
              self.texts = multiLanguage.eng;
              self.language = 'eng';
          break;
          case 'pt':
              self.texts = multiLanguage.pt;
              self.language = 'pt';
          break;
      }
    }
}

function Lenguages() {
    return {
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
    }
}