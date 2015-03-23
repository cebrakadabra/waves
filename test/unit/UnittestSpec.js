'use strict';

/* jasmine specs for controllers go here */
describe('Test the business logic of the waves animation', function() {
  var element, scope;

  beforeEach(module('angularapp'));


  describe('directive: waves-Directive', function(){

    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();

      element =
          '<div waves-Directive width="{{width}}" height="{{height}}"></waves-Directive>';

      scope.width = "1000px";
      scope.height = "400px";

      element = $compile(element)(scope);
      scope.$digest();
    }));


  describe('tests', function(){

    it("should contain a canvas tag with proper size", function() {
      var height = document.innerHeight;
      var width = document.innerHeight;
      expect(element.attr('height')).toBe('400px');
      expect(element.attr('width')).toBe('1000px');
    });

  });  


  });

});
