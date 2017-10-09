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
      params: {
        roomID: null
      }
    });
  }

  function inquireChatCookies($cookies, $uibModal, $rootScope) {
    $cookies.put('inquireChatCurrentUser', "");
    var currentUser = $cookies.get('inquireChatCurrentUser');
    if(!currentUser || currentUser === "") {
      $rootScope.modalInstance = $uibModal.open({
        animation: true,
        ariaDescribedBy: 'modal-body',
        ariaLabelledBy: 'modal-title',
        templateUrl: '/templates/login.html',
        controller: 'LoginCtrl as login'
      });
    }
  }

  angular
    .module('inquireChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
    .config(config)
    .run(['$cookies', '$uibModal', '$rootScope', inquireChatCookies]);
})();
