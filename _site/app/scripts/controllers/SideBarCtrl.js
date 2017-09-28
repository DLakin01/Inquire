(function() {
  function SideBarCtrl(Room, $uibModal, $log, $document) {
    this.rooms = Room.all;
    this.add = Room.add;
    this.open = $uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'newRoom.html',
      size: 'sm',
    });

  };

  angular
    .module('inquireChat')
    .controller('SideBarController', ['Room', '$uibModal', SideBarCtrl]);
})();
