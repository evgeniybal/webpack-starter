(function() {
  'use strict';

  angular.module('myApp').component('field', component());

  var inputAttibutes = [
    'autocomplete',
    'autofocus',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    'height',
    'width',
    'list',
    'min',
    'max',
    'multiple',
    'pattern',
    'placeholder',
    'required',
    'step'
  ];

  function component() {
    function componentController() {
      var vm = this;

      vm.$onInit = function(){
        console.log('onInit', vm, vm.field);
        vm._attrs = vm.$$attr.$attr.filter(f=>inputAttibutes.indexOf(f)!== -1);
        
    }

      init();

      function init() {}
    }

    return {
      bindings: {label:'@'},
      controller: componentController
      
    };
  }
})();
