var app = angular.module('angularapp', [
	'ngRoute', 
  'ngAnimate'
	]);

// Configuration
app.config(function($logProvider){
	$logProvider.debugEnabled(false);
});


// Routing for the Views
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/main.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

// Run
app.run(function($log){
	$log.debug("test debug");
});