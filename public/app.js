var myapp = angular.module('chatApp', ['ui.router'])

myapp.factory('socket', function() {
   var socket = io.connect('http://localhost:3000')
   return socket;
})


myapp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',

   function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('login');
      $stateProvider
         .state('login', {
            url: '/login',
            templateUrl: 'view/login.html',

         })
         .state('chat', {
            url: '/chat',
            templateUrl: 'view/chat.html'
         });

      $locationProvider.html5Mode(true);

   }
]);