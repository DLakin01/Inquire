(function() {
  function Room($firebaseArray, $uibModal) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    /**
    * @method Room.add
    * @desc Public method of Room, gives application the ability to add chat rooms
    *       hosted in FireBase. The function also serves as a barrier between
    *       our application controlers and AngularFire methods.
    */
    Room.add = function(room) {
      rooms.$add({$value: "room"});
    }

    Room.open = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'templates/newRoom.html',
        //controller: 'NewRoomCtrl as newroom'
      });
    }


    return Room;
  }

  angular
    .module('inquireChat')
    .factory('Room', ['$firebaseArray', '$uibModal', Room]);
})();
