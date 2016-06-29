var app = angular.module('icgcapp', ['ui.bootstrap','ui.router','ngAnimate']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	
	/* defaulting to /home to display home.template.html */
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl:'../views/partial-home.html'
            controller:'MainCtrl'
        })
			.state('home.step1', {
				url: "/step1",
				templateUrl:'../views/step1.template.html'
			})
			.state('home.step2', {
				url: "/step2",
				templateUrl:'../views/step2.template.html'
			})
        .state('about', {
            url: "/about",
            template:"<h3 class='text-center'>This is About Page!</h3>",
        })
        .state('contact', {
            url: "/contact",
            template:"<h3 class='text-center'>This is Contact Page!</h3>",
        })
        .state('mission', {
            url: "/mission",
            templateUrl:"../views/mission.html",
        })
         .state('philosophy', {
            url: "/philosophy",
            templateUrl:"../views/philosophy.html",
        })
         .state('faith', {
            url: "/faith",
            templateUrl:"../views/faith.html",   
        })
         .state('our-message', {
            url: "/our-message",
            templateUrl:"../views/our-message.html",
        })    
          .state('otabil', {
            url: "/otabil",
            templateUrl:"../views/otabil.html",
        })
            .state('augustine', {
            url: "/augustine",
            templateUrl:"../views/augustine.html",
        })

      $locationProvider.html5Mode(true);  
});

app.controller('MainCtrl', function($scope) {
  $scope.myInterval = 3000;

  $scope.slides = [{
    'image': 'http://i.ytimg.com/vi/ReF6iQ7M5_A/maxresdefault.jpg',
    'caption': 'test1',
    'subcap': 'test'
  }, {
    'image': 'http://i.ytimg.com/vi/ReF6iQ7M5_A/maxresdefault.jpg',
    'caption': 'test2',
    'subcap': 'test'
  }, {
    'image': 'http://i.ytimg.com/vi/ReF6iQ7M5_A/maxresdefault.jpg',
    'caption': 'test3',
    'subcap': 'test'
  }];
});