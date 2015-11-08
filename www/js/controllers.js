angular.module('starter.controllers', [])

.controller('MenuController', function () {
  console.log('MenuController');
})

.controller('ControlController', function ($scope) {
  console.log('DroneController');

  $scope.truc = function () {
    console.log('aa');
  }
})

.controller('StatusController', function ($scope, $ionicLoading, $localStorage, Status) {
  console.log('StatusController');

  $scope.$storage = $localStorage;

  $scope.status = Status.disconnected;

  $scope.synchronize = function () {
    
  }
})