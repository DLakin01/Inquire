(function() {
  function LandingCtrl(Message, Room) {
    this.rooms = Room.all;
    this.input = "New message";
    this.send = function(input, title) {
      Message.send(input, title);
      this.input = "";
    }
    this.open = Room.open;
    this.messages = [];
    this.title = null;
    this.visible = false;
    this.setRoom = function(room) {
      this.title = room;
      Message.chat = room;
      this.messages = Message.setRoom(room);
      this.visible = true;
    };

  }

  angular
    .module('inquireChat')
    .controller('LandingCtrl', ['Message', 'Room', LandingCtrl]);
})();
