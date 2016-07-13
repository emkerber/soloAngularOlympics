var app = angular.module('olympianApp', []);




app.controller('OlympianController', function($scope, $http){

$scope.getOlympians = getOlympians;

  var configObject = {
    method: 'GET',
    url: '/olympics'
  };

  function handleSuccess(response) {
    $scope.olympians = response.data;
    console.log('Success:', response.data);
  }

  function handleFailure(response) {
    console.log('Failure:', response);
  }

  function getOlympians() {
    $http(configObject).then(handleSuccess, handleFailure);
  }

  // $scope.listOlympians = function(){
  //   var data = $scope.input;
  //   $http.post('/olympians', data).then(function(response){
  //     console.log(response);
    // })
  // };
});
