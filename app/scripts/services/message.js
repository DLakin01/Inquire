(function() {
  function Message(firebase, $firebaseArray) {
    var Message = {};
    Message.chat = null;

    Message.setRoom = function(room) {
      var ref = firebase.database().ref().child('messages');
      var roomRef = ref.orderByChild("roomID").equalTo(room);
      var messageArray = $firebaseArray(roomRef);
      return messageArray;
    }

    return Message;
  }

  angular
    .module('inquireChat')
    .factory('Message', ['firebase', '$firebaseArray', Message]);
})();
