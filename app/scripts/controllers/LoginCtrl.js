(function() {
  function LoginCtrl($cookies, $uibModal, $rootScope, $firebaseAuth) {
    this.newUserName = "Choose your username";
    this.newUserPassword = "";
    this.userName = "username";
    this.password = "password";

    this.newUser = true;

    var auth = $firebaseAuth();
    console.log(auth);

    this.newUserLogin = function() {
      auth.$createUserWithEmailAndPassword(this.newUserName, this.newUserPassword).then(function(firebaseUser) {
        console.log("User created with uid: " + firebaseUser.uid);
      });
      $cookies.put('currentUser', this.newUserName);
      $rootScope.modalInstance.close();
      var initials = prompt("Inquire uses first and last initials to identify its users. What are yours?");
      $cookies.put('userInitials', initials);
    }


    this.login = function() {
      console.log(this.userName, this.password)
      auth.$signInWithEmailAndPassword(this.userName, this.password).then(function(firebaseUser) {
        console.log(firebaseUser.uid + " logged in");
      })
      $cookies.put('currentUser', this.userName);
      $rootScope.modalInstance.close();
      var initials = prompt("Inquire uses first and last initials to identify its users. What are yours?");
      $cookies.put('userInitials', initials);
    }

    this.changeScreen = function() {
      this.newUser = false;
      this.userName = '';
      this.password = '';
    }

    this.changeScreenBack = function() {
      this.newUser = true;
      this.newUserName = '';
      this.newUserPassword = '';
    }

    //this.auth.createUserWithEmailAndPasword(this.newUserName, this.newUserPassword);
  }

  angular
    .module('inquireChat')
    .controller('LoginCtrl', ['$cookies', '$uibModal', '$rootScope', '$firebaseAuth', LoginCtrl]);
})();
