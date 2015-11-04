 (function() {
   angular.module('chatApp')
     .directive('mlLogin', function() {
       return {
         scope: {},
         templateUrl: 'Template/mlLoginDirective.html',

         controller: ['$scope', '$state', '$location', 'socket', function($scope, $state, $location, socket) {

           var navigate = function() {
             $state.go('chat');
           }

           $scope.signin = function() {
            socket.emit('signIn', $scope.usr.text);
           }

            socket.on('signinSuccess', function(successMessage) { 
              navigate();
            });

             socket.on('signinError', function(errorMessage) { 
                $scope.$apply(function () {
                $scope.errorMsg = errorMessage;
               });
            });
            

           $scope.signup = function() {
             socket.emit('INSERT.USER', $scope.usr.text);
             $scope.usr.text = '';
           }
           socket.on('signup.error', function(signupError) {      
            $scope.$apply(function () {
            $scope.errorMsg = signupError;
             });
           });

         }]
       }
     });
 })();