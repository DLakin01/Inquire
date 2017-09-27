(function() {
  function SideBarCtrl(Room) {
    this.rooms = Room.all;
  };

  angular
    .module('inquireChat')
    .controller('SideBarController', ['Room', SideBarCtrl]);
})();
