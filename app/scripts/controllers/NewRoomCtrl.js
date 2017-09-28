(function() {
  function NewRoomCtrl(Room) {
    this.room = Room;
    this.input = "";
    this.add = Room.add;
  }

  angular
    .module('inquireChat')
    .controller('NewRoomCtrl', ['Room', NewRoomCtrl]);
})();
