(function() {
  function LandingCtrl($state, $stateParams, Message, Room) {
    this.rooms = Room.all;
    this.open = Room.open;
    this.messages = [];
    this.title = null;
    this.setRoom = function(room) {
      this.title = room;
      Message.chat = room;
      this.messages = Message.setRoom(room);
    };




    //will need UNIX timestamp
    //further controller methods to isolate message content, author, date

  }

  angular
    .module('inquireChat')
    .controller('LandingCtrl', ['$state', '$stateParams', 'Message', 'Room', LandingCtrl]);
})();
