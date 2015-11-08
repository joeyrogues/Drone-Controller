angular.module('starter.services', [])

.factory('Status', function () {
  return {
    connected:    {message: 'connected',    class: 'connected'    },
    pending:      {message: 'pending',      class: 'pending'      },
    disconnected: {message: 'disconnected', class: 'disconnected' }
  }
})

.factory('DroneService', function () {
  return {
  	
  };
});