'use strict';

/* jasmine specs for controllers go here */
describe('Test the business logic of the waves animation', function() {
  var element, scope;

  beforeEach(module('angularapp'));


  describe('directive: waves-Directive', function(){



    ibeforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();

    element =
        '<div waves-Directive size="{{size}}"></waves-Directive>';

    scope.size = 100;

    element = $compile(element)(scope);
    scope.$digest();
  }));



  });

});
