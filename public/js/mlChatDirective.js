(function() {
  
  angular.module('chatApp').directive('mlChat', function() {

    return {

      scope: {},

      templateUrl: 'Template/mlChatDirective.html',

      controller: ['$scope', 'socket', '$http', function($scope, socket, $http) {
      
        $scope.msgs = [];


        $http.get('/export').then(function (response) {
          console.log('API call');
          $scope.users = response.data;
        });

        $scope.sendMsg = function() {
          socket.emit('send msg', $scope.msg.text);
          $scope.msg.text = '';
        }
        socket.on('get msg', function(data) {
          $scope.msgs.push(data);
          $scope.$digest();
        });
      }]
    }
  });
})();