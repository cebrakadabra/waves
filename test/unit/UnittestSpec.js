'use strict';

/* jasmine specs for controllers go here */
describe('Test the business logic of the waves animation', function() {
  var element, scope;

  beforeEach(module('angularapp'));


  describe('directive: waves-Directive', function(){

    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();

      element = '<div waves-Directive width="{{width}}" height="{{height}}"></waves-Directive>';

      scope.width = "1000px";
      scope.height = "400px";

      scope.mouseDown = true;

      element = $compile(element)(scope);
      scope.$digest();
    }));


    describe('Event Listeners', function(){
      describe('touchstart', function(){
        
        // it('on touchstart mouseDown should be true', function(){
        //   browserTrigger(element, 'mousedown');
        //   expect($rootScope.mouseDown).toEqual(true);
        // });

      });
    });  

    describe('Test Controller Input Values', function(){
      it('should have a width of window.innerWidth', inject(function($controller){
        var scope = {},
        ctrl = $controller('MainCtrl', {$scope:scope});
        expect(scope.width).toBe(window.innerWidth);
      }));

      it('should have a height of window.innerHeight', inject(function($controller){
        var scope = {},
        ctrl = $controller('MainCtrl', {$scope:scope});
        expect(scope.height).toBe(window.innerHeight);
      }));
    });


    describe('Tests depending on the Canvas itself', function(){

      it("should contain a canvas tag with proper size", function() {
        expect(element.attr('height')).toBe('400px');
        expect(element.attr('width')).toBe('1000px');
      });

      // it("should contain a canvas tag with proper config", function() {
      //   expect(element.attr('height')).toBe('400px');
      //   expect(element.attr('width')).toBe('1000px');
      // });

    });  


  });

});
