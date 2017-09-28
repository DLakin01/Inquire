(function() {
  function NewRoomCtrl(Room, $rootScope) {
    var name
    this.room = Room;
    this.input = "Inquire away";
    this.close = function() {
      $rootScope.modalInstance.close();
    }
    this.add = function() {
      Room.add(this.input);
      this.close();
    }
  }

  angular
    .module('inquireChat')
    .controller('NewRoomCtrl', ['Room', '$rootScope', NewRoomCtrl]);
})();
