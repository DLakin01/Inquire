(function() {
  function LoginCtrl($cookies, firebase, $uibModal, $rootScope) {
    this.input = "Enter your username";

    this.login = function(newUser) {
      $cookies.put('currentUser', this.input);
      $rootScope.modalInstance.close();
    }
  }

  angular
    .module('inquireChat')
    .controller('LoginCtrl', ['$cookies', 'firebase', '$uibModal', '$rootScope', LoginCtrl]);
})();
