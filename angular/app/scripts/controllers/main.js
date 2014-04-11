'use strict';

angular.module('angularApp')
  .controller('MainCtrl', 
              function ($scope, taskService) {
    $scope.addThing = function(thing) {
      taskService.addTask(thing);
    };
    $scope.tasks = taskService.getTasks();
  });
