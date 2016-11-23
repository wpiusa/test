angular.module('myApp', [])
    .controller('MyCtrl', function($scope) {

       
        $scope.checkGenderType=function(value){
          if (value=="male"){
            $scope.maleType="he";
            $scope.maleType2="his";
          }else{
            $scope.femaleType="she";
            $scope.femaleType2="her";
          }
        }
    
});