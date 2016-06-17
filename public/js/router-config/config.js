var app = angular.module('icgcapp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	
	/* defaulting to /home to display home.template.html */
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl:'../views/partial-home.html'
            // controller:'homeController'
        })
			.state('home.step1', {
				url: "/step1",
				templateUrl:'app/partials/step1.template.html'
			})
			.state('home.step2', {
				url: "/step2",
				templateUrl:'app/partials/step2.template.html'
			})
        .state('about', {
            url: "/about",
            template:"<h3 class='text-center'>This is About Page!</h3>",
        })
        .state('contact', {
            url: "/contact",
            template:"<h3 class='text-center'>This is Contact Page!</h3>",
        });

      $locationProvider.html5Mode(true);  
});
