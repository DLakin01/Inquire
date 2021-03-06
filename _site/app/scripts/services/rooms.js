(function() {
  function Room($firebaseArray) {
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
      rooms.$add({$value: "room"}).then(function(ref) {
        var id = ref.key();
        console.log("added chat room with id" + id);
        rooms.$indexFor(id);
      });
    }

    return Room;
  }

  angular
    .module('inquireChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
