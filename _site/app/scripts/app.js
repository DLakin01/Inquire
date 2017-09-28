(function() {
  function config($locationProvider, $stateProvider) {

    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      /*.state('newroom', {
        controller: 'NewRoomCtrl as newRoom',
        templateUrl: '/templates/newRoom.html'
      });*/
  };

  angular
    .module('inquireChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config)
})();
