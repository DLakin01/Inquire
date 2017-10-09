(function() {
  function LoginCtrl($cookies, firebase, $uibModal, $rootScope) {
    this.input = "Enter your username";
    var newUser = this.input;
    this.login = function(newUser) {
      $cookies.put('inquireChatCurrentUser', this.input);
      $rootScope.modalInstance.close();
    }
  }

  angular
    .module('inquireChat')
    .controller('LoginCtrl', ['$cookies', 'firebase', '$uibModal', '$rootScope', LoginCtrl]);
})();
