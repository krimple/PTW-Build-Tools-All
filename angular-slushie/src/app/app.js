
angular.module('angularSlushie', [
  'ngRoute',
  'angularSlushie.todo',
  'angular-slushie-templates'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/angular-slushie/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
