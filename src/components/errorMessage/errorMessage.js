import template from './errorMessage.html';

function componentController() {
  var vm = this;

  function _getErrorDescription(error) {
    switch (error) {
      case 'required':
        return 'This field is required';

      case 'email':
        return 'Enter a valid email address';

      case 'max':
      case 'maxlength':
        return 'Exceeds maximum limit';

      case 'min':
      case 'minlength':
        return 'Less than minimum length';

      case 'pattern':
        return 'Invalid format';

      case 'adult':
        return 'To Young';
      case 'email':
        return 'Invalid email format';      

      default:
        return 'Entered value is not valid';
    }
  }

  vm.getMessage = function() {
    if (!vm.field) return '';
    
    //standart errors from angularjs 
    var errors = Object.keys(vm.field.$error).filter(x=>x!=='yup');
    if (!vm.field.$pristine && vm.field.$error && errors.length > 0) {      
      return _getErrorDescription(errors[0]);
    }
    
    //yup schema validation errors
    if (vm.field.errorMessages && vm.field.errorMessages !== 0) {
      return vm.field.errorMessages[0];
    }
    return '';
  };
  init();

  function init() {}
}

const errorMessage = {
  template,
  bindings: { field: '<' },
  controller: componentController
};

export default errorMessage;
