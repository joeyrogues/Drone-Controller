angular.module('starter.controllers', [])

.controller('MenuController', function ($scope, $localStorage) {
  console.log('MenuController');

  $scope.$storage = $localStorage;
})

.controller('ControlController', function ($scope) {
  console.log('DroneController');

  
})

.controller('StatusController', function ($timeout, $scope, $rootScope, $ionicLoading, $localStorage, Status, Drone) {
  console.log('StatusController');

  $scope.$storage = $localStorage;

  $scope.status = Status.disconnected;

  $scope.synchronize = function () {
    $ionicLoading.show({
      templateUrl: 'templates/partials/loading.html',
      scope:       $scope
    });
    $scope.status = Status.pending;

    $rootScope.drone = new Drone({
      host: $scope.$storage.host,
      port: $scope.$storage.port
    });
    
    $timeout(function() {
      $rootScope.drone.ping().then(function (response) {
        $scope.status = Status.connected;
        $rootScope.isConnected = true;

      }).catch(function () {
        $scope.status = Status.disconnected;
        $rootScope.isConnected = false;

      }).finally(function () {
        $scope.lastCheck = Date.now();

        $timeout(function () {
          $ionicLoading.hide();
        }, 500);
      });
    }, 500);

    window.drone = $rootScope.drone;
    window.scope = $scope;

    window.truc = $timeout
  };

})
