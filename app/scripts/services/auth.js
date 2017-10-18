(function() {
  function auth($firebaseAuth) {
    return $firebaseAuth();
  }

  angular
    .module('inquireChat')
    .factory('auth' ['$firebaseAuth', auth]);
})();
