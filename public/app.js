var myapp = angular.module('chatApp' , ['ui.router'])

myapp.factory('socket', function (){
	       var socket = io.connect('http://localhost:3000')
	       return socket;
         })



myapp.config(['$stateProvider', '$urlRouterProvider','$locationProvider',

      function($stateProvider, $urlRouterProvider , $locationProvider) {  
        $urlRouterProvider.otherwise('login');
				$stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'view/login.html',
         
        })
        .state('chat', {
            url:'/chat',
           templateUrl: 'view/chat.html'
        });

         $locationProvider.html5Mode(true);
     
 }]);
// myapp.controller('loginctrl' , ['$scope' ,'socket', '$state' , function ($scope, socket ,$state ){
	
// $scope.goto = function(state) {
// 		$state.go(state);
// 	}


// }]);

// myapp.controller('chatctrl' , ['$scope' ,'socket', '$state' , function ($scope, socket ,$state ){
	
// $scope.submituserName = function() {
//   console.log("workingfun");
//    $state.go('chat');
// };


// }]);




// ....

//     (function(){
//       angular.module('chatApp', ['ui.router'])

//       .factory('socket', function (){
// 	       var socket = io.connect('http://localhost:3000')
// 	       return socket;
//          })

//       .config(['$stateProvider', '$urlRouterProvider',

//       function($stateProvider, $urlRouterProvider) {
//       		$stateProvider
//           .state('/chat', {
//           url: "/chat",
//           templateUrl: "/chat.html",
        
//         })
//       }]);

//         controller: ('chatctrl', ['$scope' ,'socket', '$state' , function ($scope, socket ,$state ){
	
// 					$scope.submituserName = function() {
//  				 console.log("workingfun");
//   			 $state.go('chat');
// 					}
// 				}]);
// })();



//..

