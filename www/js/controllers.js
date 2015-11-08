angular.module('starter.controllers', [])

.controller('MenuController', function () {
  console.log('MenuController');
})

.controller('ControlController', function () {
  console.log('DroneController');
})

.factory('Status', function () {
  return {
    connected:    {message: 'connected',    class: 'connected'    },
    pending:      {message: 'pending',      class: 'pending'      },
    disconnected: {message: 'disconnected', class: 'disconnected' }
  }
})

.controller('StatusController', function ($scope, $ionicLoading, $localStorage, Status) {
  console.log('StatusController');

  $scope.$storage = $localStorage;

  $scope.status = Status.connected;

  $scope.synchronize = function () {
    
  }
})