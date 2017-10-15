(function() {
  function auth(firebase, $firebaseAuth) {
    var auth = $firebaseAuth();

    return auth;
  }

  angular
    .module('inquireChat')
    .factory('auth' ['firebase', '$firebaseAuth', auth]);
})();
