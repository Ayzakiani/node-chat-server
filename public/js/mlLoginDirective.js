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

           $scope.submituserName = function() {
             navigate();
           }

           $scope.signupUser = function() {
             socket.emit('INSERT.USER', $scope.usr.text);
             $scope.usr.text = '';
           }

           socket.on('signup.error', function(data) {  
            $scope.errorMessage = data;
            $scope.$apply($scope.errorMessage);

           })
         }]
       }
     });
 })();