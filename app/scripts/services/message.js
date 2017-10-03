(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getMessages = function(roomID) {
      var discussion = messages;
      var messageArray = [];
      for(var i = 0; i < discussion.length; i++) {
        if(discussion[i].roomID === roomID){
          messageArray.push(discussion[i]);
        }
      }
      return messageArray;
    }

    return Message;
  }

  angular
    .module('inquireChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
