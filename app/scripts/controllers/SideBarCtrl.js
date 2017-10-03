(function() {
  function SideBarCtrl(Room) {
    this.rooms = Room.all;
    this.open = Room.open;
  };

  angular
    .module('inquireChat')
    .controller('SideBarCtrl', ['Room', SideBarCtrl]);
})();
