(function() {
  function LoginCtrl() {
    this.input = "Enter your username here";
    this.login = function(this.input) {
      inquireChatCookies.set(this.input);
      
    }
  }

  angular
    .module('inquireChat')
    .controller('LoginCtrl' ['inquireChatCookies', LoginCtrl]);
})();
