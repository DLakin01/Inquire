(function() {
  function LoginCtrl($cookies, $uibModal, $rootScope, $firebaseAuth) {
    this.newUserName = "Choose your username";
    this.newUserPassword = "";
    var newName = this.newUserName;
    var newWord = this.newUserPassword;
    this.userName = "username";
    this.password = "password";
    var name = this.userName;
    var word = this.password;

    this.newUser = true;

    var auth = $firebaseAuth();
    console.log(auth);

    this.newUserLogin = function() {
      auth.$createUserWithEmailAndPassword(newName, newWord).then(function(firebaseUser) {
        console.log("User created with uid: " + firebaseUser.uid);
      });
      $cookies.put('currentUser', this.newUserName);
      $rootScope.modalInstance.close();
      var initials = prompt("Inquire uses first and last initials to identify its users. What are yours?");
      $cookies.put('userInitials', initials);
    }


    this.login = function() {
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
