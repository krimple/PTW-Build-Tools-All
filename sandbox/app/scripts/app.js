angular.module('myApp', [])
  .constant('PI', 3.14159)
  .value('runme', function(val) {
      if (val > 10) {
          console.log('wow, it is a large number');
       } else {
           console.log('it is very tiny.');
        }
     });

