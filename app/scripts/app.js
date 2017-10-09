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
  };

  angular
    .module('inquireChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
    .config(config)
})();
