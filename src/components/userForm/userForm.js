import template from './userForm.html';
import schema from './validationSchema';

export default {
  template,
  bindings: { onAddUser: '&' },
  controller: userFormController
};

function userFormController() {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.schema = schema;
  };

  ctrl.getFieldInfo = function(name) {
    var touched = ctrl.form[name].$touched;
    var errors = '';

    return ctrl.form[name];
  };
  ctrl.addUser = function() {
    var newUser = Object.assign({}, ctrl.user);
    ctrl.onAddUser({ user: newUser });
  };
}
