(function() {
  function NewRoomCtrl(Room, $rootScope, SideBarCtrl) {
    var name
    this.room = Room;
    this.input = "Inquire away";
    this.close = function() {
      $rootScope.modalInstance.close();
    }
    this.addRoom = function() {
      var roomObj = {
        title: this.input
      };
      Room.add(roomObj);
      $rootScope.modalInstance.close();
    }
  }

  angular
    .module('inquireChat')
    .controller('NewRoomCtrl', ['Room', '$rootScope', NewRoomCtrl]);
})();
