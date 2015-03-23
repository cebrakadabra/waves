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

// capitalize Filter
app.filter('capitalize', function() {
  return function(input, all) {
    return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
  };
}); 