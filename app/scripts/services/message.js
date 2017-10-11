(function() {
  function Message(firebase, $firebaseArray, $cookies) {
    var Message = {};
    Message.chat = null;
    var ref = firebase.database().ref().child('messages');
    var cookies = $cookies.get('currentUser');
    var initials;
    if(cookies) {
      var splitCookie = cookies.split(' ');
      initials = splitCookie[0].charAt(0) + splitCookie[1].charAt(0);
    }

    Message.setRoom = function(room) {
      var roomRef = ref.orderByChild("roomID").equalTo(room);
      var messageArray = $firebaseArray(roomRef);
      var cookie = $cookies.get('currentUser');
      var splitCookie = cookie.split(' ');
      initials = splitCookie[0].charAt(0) + splitCookie[1].charAt(0);
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
