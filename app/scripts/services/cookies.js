(function() {
  function inquireChatCookies($cookies, firebase, $uibModal, $rootScope) {
    $cookies.put('inquireChatCurrentUser', '')
    var currentUser = $cookies.get('inquireChatCurrentUser');
    var newUser = function() {
      $rootScope.modalInstance = $uibModal.open({
        animation: true,
        ariaDescribedBy: 'modal-body',
        ariaLabelledBy: 'modal-title',
        templateUrl: 'templates/login.html'
      });
    };
    if(!currentUser || currentUser = "") {
      newUser();
    }
    console.log(currentUser);
  }

  angular
    .module('inquireChat')
    .run('inquireChatCookies', ['$cookies', 'firebase', '$uibModal', '$rootScope', inquireChatCookies]);
})();
