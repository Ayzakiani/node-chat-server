
(function() {
      angular.module('chatApp')
          .directive('mlChat', function() {

              return {
                  scope: {},

                  templateUrl: 'Template/mlChatDirective.html',
                 
                  controller:['$scope' , 'socket', function ($scope , socket) {
                  	$scope.msgs = [];
                    

								   $scope.sendMsg = function () {	
								   		socket.emit('send msg' , $scope.msg.text);
								   		$scope.msg.text = '';
								   }

								   socket.on('get msg' , function(data){
								   	$scope.msgs.push(data);
								   	$scope.$digest();

								   })

									}]
              }
         });
  })();
               