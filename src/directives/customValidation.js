const yupSchemaValidation = function directive() {
  function directiveController() {
    var vm = this;

    init();

    function init() {}
  }

  function link(scope, element, attributes, control) {
    control.$validators.yup = function(modelValue, viewValue) {
      if (control.$isEmpty(modelValue)) {
        // if empty, correct value
        return true;
      }

      if (!scope) return true;

      const schema = scope.Ctrl.schema;
      const value = {};
      value[control.$name] = viewValue;      
      control.errorMessages = [];
      try {
        schema.validateSyncAt(control.$name, value, { abortEarly: false });
      } catch (error) {
        control.errorMessages = error.errors;
        //const errors = error.inner.map(x => x.type);
        // errors.forEach(e => {
        //   control.$error[e] = true;          
        // });
        return false;
      }

      return true;
    };
  }

  return {
    require: 'ngModel',
    bindToController: true,
    controller: directiveController,
    controllerAs: 'Ctrl',
    link: link,
    restrict: 'AE',
    scope: {
      schema: '<',
      text: '@'
    }
  };
};

export default yupSchemaValidation;
