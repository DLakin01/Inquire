(function() {
  function Message(firebase, $firebaseArray, $cookies) {
    var Message = {};
    Message.chat = null;
    var ref = firebase.database().ref().child('messages');
    var storage = firebase.storage()
    var storageRef = storage.ref('WelcomeBitmoji.png')
    var initials = $cookies.get('userinitials');


    Message.setRoom = function(room) {
      var roomRef = ref.orderByChild("roomID").equalTo(room);
      var messageArray = $firebaseArray(roomRef);
      return messageArray;
    };

    Message.send = function(initials, newMessage, room) {
      console.log(initials);
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
