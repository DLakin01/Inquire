(function() {
  function ChatCtrl($state, $stateParams, Message, Room) {
    this.roomID = $stateParams.roomID;
    this.messages = Message.chats;


    //will need UNIX timestamp
    //further controller methods to isolate message content, author, date

  }

  angular
    .module('inquireChat')
    .controller('ChatCtrl', ['$state', '$stateParams', 'Message', 'Room', ChatCtrl]);
})();
