// var icgcapp= {};
// var app = angular.module('icgcapp', ['ui.bootstrap', 'ngAnimate']) 

// .controller('CarouselCtrl',['$scope', '$animate', function ($scope, $animate) {
    
//     // will work as normal, if globaly disabled
//     $animate.enabled(true); 
    
//     $scope.slides = [
//         { image: 'http://lorempixel.com/400/200/', text: 'blah' },    
//         { image: 'http://lorempixel.com/400/200/', text: 'blah' },
//         { image: 'http://lorempixel.com/400/200/', text: 'blah' }, 
//     ]
        
// }]);

function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
}