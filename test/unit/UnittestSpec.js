'use strict';

/* jasmine specs for controllers go here */
describe('Test the business logic of the waves animation', function() {

  beforeEach(module('angularapp'));


  describe('Test if testing works', function(){



    it('testing should work', inject(function($controller) {
      var scope = {},
        ctrl = $controller('MainCtrl', {$scope:scope});
        
        expect(scope.test).toBe(100);

    }));



  });

});
