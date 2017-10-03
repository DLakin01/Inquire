(function() {
  function config($locationProvider, $stateProvider) {

    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('chat', {
        url: '/chat/:roomID',
        controller: 'ChatCtrl as chat',
        templateUrl: '/templates/chat.html',
        params: {
          roomID: null
        }
      });
  };

  angular
    .module('inquireChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config)
})();
