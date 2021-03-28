angular.module('myApp').config([
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider
      .when('/users', {
        template: '<user-manager></user-manager>'
      })
      .when('/about', {
        template: '<about></about>'
      })
      .when('/', {
        template: '<h1>Welcome to our site!</h1>'
      })
      .when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
      })
      .otherwise('/');
  }
]);
