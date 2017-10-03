(function() {
  function ChatCtrl($state, $stateParams, Message, Room) {
    this.discussion = Message.getMessages($stateParams.roomID);
    this.title = $stateParams.roomID;
    console.log(this.discussion);
    //will need UNIX timestamp
    //further controller methods to isolate message content, author, date

  }

  angular
    .module('inquireChat')
    .controller('ChatCtrl', ['$state', '$stateParams', 'Message', 'Room', ChatCtrl]);
})();
