import appComponent from './app.component';

import errorMessage from '../components/errorMessage/errorMessage';
import Navbar from '../components/navbar/navbar';
import userForm from '../components/userForm/userForm';
import userlist from '../components/userList/userlist';
import userManager from '../components/userManger/userManager';
import customValidation from '../directives/customValidation';

const module = angular.module('myApp', ['ngRoute']);
module.component('app', appComponent);
// module.component('about', aboutComponent);
module.component('navBar', Navbar);
module.component('errorMessage', errorMessage);
module.component('userForm', userForm);
module.component('userList', userlist);
module.component('userManager', userManager);
module.directive('yup', customValidation);

angular.module('myApp').config([
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider
      .when('/users', {
        template: '<user-manager></user-manager>',
      })

      .when('/', {
        template: '<h1>Welcome to our site!</h1>',
      })
      .when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>',
      })
      .otherwise('/');
  },
]);

export default module;
