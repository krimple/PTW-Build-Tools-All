'use strict';

angular.module('angularApp')
  .factory('taskService', function() {
    var tasks = [],
        service = { };
     service.addTask = function(task) {
       tasks.push(task);
     };
     service.getTasks = function() {
       return tasks;
     };
     return service;
  });
