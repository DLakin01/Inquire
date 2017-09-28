(function() {
  function Modal($uibModal) {
    var Modal = {};

    Modal.open = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'templates/newRoom.html',
        controller: 'NewRoomCtrl as newroom'
      });
    }
    return Modal;
  }

  angular
    .module('inquireChat')
    .factory('Modal' ['$uibModal', Modal]);
})();
