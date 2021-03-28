import template from './userManager.html';

function componentController() {
  var ctrl = this;

  ctrl.handleAddUser = function(user) {
    //assing userId based on array legth

    var newId = ctrl.users.length + 1;
    user.userId = newId;

    //imputable append item to array
    ctrl.users = ctrl.users.concat(user);
  };

  ctrl.handleDeleteUser = function(user) {
    //imutable remove item from array
    ctrl.users = ctrl.users.filter(u => u.userId != user.userId);
  };
  init();

  function init() {
    ctrl.users = [];
  }
}

export default {
  template,
  bindings: {},
  controller: componentController
};
