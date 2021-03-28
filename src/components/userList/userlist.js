import template from './userList.html';

function userListController() {
  var ctrl = this;

  ctrl.delete = function(index) {
    var user = { user: ctrl.users[index] };
    ctrl.onDelete(user);
  };
  init();

  function init() {}
}

export default {
  template,
  bindings: { users: '<', onDelete: '&' },
  controller: userListController
};
