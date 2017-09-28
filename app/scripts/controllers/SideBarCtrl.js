(function() {
  function SideBarCtrl(Room, Modal) {
    this.rooms = Room.all;;
    this.open = Room.open;
  };

  angular
    .module('inquireChat')
    .controller('SideBarController', ['Room', SideBarCtrl]);
})();
