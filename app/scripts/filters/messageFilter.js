(function() {
  function messageFilter() {
    return function(messages) {
      var messages = messages;
      messages.sort(function(a,b) {
        return a.timestamp - b.timestamp;
      });
      return messages;
    };
  }

  angular
    .module('inquireChat')
    .filter('messageFilter', ['$state', '$stateParams', messageFilter]);
})();
