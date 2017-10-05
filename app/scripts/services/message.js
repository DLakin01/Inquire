(function() {
  function Message(firebase, $firebaseArray) {
    var Message = {};
    var messageArray = [];
    var ref = firebase.database().ref().child('messages');
    ref.orderByChild('timestamp');
    Message.chats = $firebaseArray(ref);
    console.log(Message.chats);

    return Message;
  }

  angular
    .module('inquireChat')
    .factory('Message', ['firebase', '$firebaseArray', Message]);
})();
