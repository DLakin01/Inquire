(function() {
  function LandingCtrl(Message, Room, $cookies) {
    this.rooms = Room.all;
    console.log(this.rooms);
    this.input = "";
    this.initials = $cookies.get('userInitials');
    console.log(this.initials);
    this.send = function(initials, input, title) {
      Message.send(initials, input, title);
      this.input = "";
    }
    this.open = Room.open;
    this.messages = [];
    this.title = null;
    this.visible = false;
    this.image = false
    this.setRoom = function(room) {
      this.title = room;
      Message.chat = room;
      this.messages = Message.setRoom(room);
      this.visible = true;
    };

  }

  angular
    .module('inquireChat')
    .controller('LandingCtrl', ['Message', 'Room', '$cookies', LandingCtrl]);
})();
