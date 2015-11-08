angular.module('starter.controllers', [])

.controller('MenuController', function ($scope, $localStorage) {
  console.log('MenuController');

  $scope.$storage = $localStorage;
})

.controller('ControlController', function ($scope) {
  console.log('DroneController');


})

.controller('StatusController', function ($scope, $rootScope, $ionicLoading, $localStorage, Status, Drone) {
  console.log('StatusController');

  $scope.$storage = $localStorage;

  $scope.status = Status.disconnected;

  $scope.synchronize = function () {
    console.log("Synchronize()");

    $rootScope.drone = new Drone({
      host: $scope.$storage.host,
      port: $scope.$storage.port
    });

    window.drone = $rootScope.drone;
  };

})
