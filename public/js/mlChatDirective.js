
(function() {
      angular.module('chatApp')
          .directive('mlChat', function() {

              return {
                  scope: {},

                  templateUrl: 'Template/mlChatDirective.html',
                 
                  controller:['$scope' , 'socket', function ($scope , socket) {

                
                   // $scope.usr =  Model.find().populate(users);


                     socket.on('get usr' , function(data){
                      console.log(data);
                      $scope.usr =  Model.find({}).populate(users);
                     }) 

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
               