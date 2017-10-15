(function() {
  function Message(firebase, $firebaseArray, $cookies) {
    var Message = {};
    Message.chat = null;
    var ref = firebase.database().ref().child('messages');
    var initials = $cookies.get('userInitials');


    Message.setRoom = function(room) {
      var roomRef = ref.orderByChild("roomID").equalTo(room);
      var messageArray = $firebaseArray(roomRef);
      return messageArray;
    };

    Message.send = function(newMessage, room) {
      var messageArray = $firebaseArray(ref);
      var messageObj = {
        userInitials: initials,
        content: newMessage,
        roomID: room,
        timestamp: Math.floor(Date.now()/1000)
      }
      messageArray.$add(messageObj);
    }

    return Message;
  }

  angular
    .module('inquireChat')
    .factory('Message', ['firebase', '$firebaseArray', '$cookies', Message]);
})();
