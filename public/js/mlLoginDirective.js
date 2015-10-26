 (function() {
    angular.module('chatApp')
      .directive('mlLogin', function() {
        return {
          scope: {},
            templateUrl: 'Template/mlLoginDirective.html',
          
            controller: ['$scope', '$state' ,'$location' ,'socket', function ($scope , $state ,$location , socket) {
              
                   
        

                   var navigate = function () {
                      $state.go('chat');
                   }

                   $scope.submituserName = function () {
                    // console.log("hah");
                     // socket.emit ('INSERT.USER' , $scope.usr.text);
                        navigate(); 
                    }
                         
                       


                    $scope.signupUser = function () {
                    socket.emit ('INSERT.USER' , $scope.usr.text);
                           $scope.usr.text = '';
                         
                         }

                 socket.on('get usr' , function(data){
               
                 // $scope.$digest();

                })             
          }]
        }
    });
})();
               

                          



                     // $scope.submituserName = function() {
             //         socket.emit ('new user' , $scope.user.text , function(data){
             //          if (data) {
             //            navigate();
             //          } else {
             //            $scope.errorMessage = 'That user name is already taken, try again!';
             //          }
             //              });

             //         }


                     // if( socket.emit('new user' , $scope.user.text)) {  
                     //     $state.go('chat');
                     //     } else {
                     //        $scope.errorMessage = 'That user name is already taken, try again!';
                     //       }
                     //  $scope.user.text = '';
                     // };

                    // socket.on ('usernames' , function(data){
                    //   $scope.Users = '';
                    //   for (var i = 0; i < data.length; i++){
                      
                    //     $scope.Users = "data[i]";
                    //   }
                    //   $users =  $scope.Users;
                    // })

 // $scope.submituserName = function () {
 //                          socket.emit ('new user' , nickname , function(data) {
 //                           if (data) {
 //                             navigate();
 //                            } else {
 //                              $scope.errorMessage = 'That user name is already taken, try again!';
 //                            }
 //                          });

    // socket.on ('usernames' , function(data){
    //                       for (var i =0 ; i < data.length ; i++){
    //                         $scope.User = "data[i]";

    //                       }
    //                     });
