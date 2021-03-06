(function() {
  function config($locationProvider, $stateProvider) {

    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('landing', {
      url: '/',
      controller: 'LandingCtrl as landing',
      templateUrl: '/templates/landing.html',
    });
  }

  function inquireChatCookies($cookies, $uibModal, $rootScope) {
    var currentUser = $cookies.get('currentUser');
    if(!currentUser || currentUser === "") {
      $rootScope.modalInstance = $uibModal.open({
        animation: true,
        ariaDescribedBy: 'modal-body',
        ariaLabelledBy: 'modal-title',
        templateUrl: '/templates/login.html',
        controller: 'LoginCtrl as login',
        backdrop: 'static',
        keyboard: false
      });
    }
  }

  angular
    .module('inquireChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies', 'ngSanitize', 'vkEmojiPicker', 'mgcrea.ngStrap'])
    .config(config)
    .run(['$cookies', '$uibModal', '$rootScope', inquireChatCookies]);
})();
