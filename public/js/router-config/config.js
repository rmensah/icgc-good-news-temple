var app = angular.module('icgcapp', ['ui.router','ui.bootstrap','ngAnimate'])
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	
	/* defaulting to /home to display home.template.html */
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl:'../views/partial-home.html',
            controller:'CarouselDemoCtrl'
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

app.controller('CarouselDemoCtrl', function($scope) {
  $scope.myInterval = 3000;

  $scope.slides = [{
    'image': '../../images/church_photo_001.png',
    'caption': 'test1',
    'subcap': 'test'
  }, {
    'image': '../../images/church_photo_002.png',
    'caption': 'test2',
    'subcap': 'test'
  }, {
    'image': '../../images/church_photo_003.png',
    'caption': 'test2',
    'subcap': 'test'
  }, {
    'image': '../../images/church_photo_augustine_002.png',
    'caption': 'test3',
    'subcap': 'test'
  }];
});

// Test

// function CarouselDemoCtrl($scope){
//   $scope.myInterval = 3000;
//   $scope.slides = [
//     {
//       image: '../../images/church_photo_003.png'
//     },
//     {
//       image: '../../images/church_photo_003.png'
//     },
//     {
//       image: '../../images/church_photo_003.png'
//     },
//     {
//       image: '../../images/church_photo_003.png'
//     }
//   ];
// }