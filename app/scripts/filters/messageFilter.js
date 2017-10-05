(function() {
  function messageFilter($state, $stateParams) {
    return function(messages) {
      var filteredMessages = [];
      var roomID = $stateParams.roomID;

      for(var i = 0; i < messages.length; i++) {
        var message = messages[i];
        if(message.roomID === roomID) {
          filteredMessages.push(message);
        }
      }
      filteredMessages.sort(function(a,b) {
        return a.timestamp - b.timestamp;
      });
      return filteredMessages;
    };
  }

  angular
    .module('inquireChat')
    .filter('messageFilter', ['$state', '$stateParams', messageFilter]);
})();
