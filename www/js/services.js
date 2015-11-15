angular.module('starter.services', [])

.factory('Status', function () {
  return {
    connected:    {message: 'connected',    class: 'connected'    },
    pending:      {message: 'pending',      class: 'pending'      },
    disconnected: {message: 'disconnected', class: 'disconnected' }
  }
})

.factory('LogEntry', function () {
	var LogEntry = function (params) {
		var params = params || {};

		this.timestamp = params.timestamp || Date.now();
		this.status    = params.status    || '-';
		this.message   = params.message   || '-';
		this.icon      = params.icon      || 'ion-jet';
	};

	return LogEntry;
})

.factory('Drone', function ($http, LogEntry) {
	var Drone = function (params) {
		if (!params) {
			throw 'Drone: Missing parameters';
		}

		if (!params.host || params.host.length == 0 ||
			!params.port || params.port.length == 0) {
			throw 'Drone: Unexpected parameters';
		}

		this.host = params.host;
		this.port = params.port;

		this.logs = [];
	};

	Drone.prototype._getBaseUrl = function () {
		return 'http://' + this.host + ':' + this.port +'/';
	};

	Drone.prototype.getLogs = function () {
		return this.logs;
	};

	Drone.prototype._move = function (direction) {
		var self = this;

		return $http.post(this._getBaseUrl() + 'move', {
			direction: direction
		}).then(function (response) {
			console.log(response);

			self.logs.push(new LogEntry({
				icon:    'ion-arrow-move',
				message: 'Moving ' + direction,
				status:  response.statusText
			}));
		});
	};

	Drone.prototype.moveForward = function () {
		return this._move('forward');
	};

	Drone.prototype.moveBackward = function () {	
		return this._move('backward');
	};

	Drone.prototype.moveLeft = function () {
		return this._move('left');
	};

	Drone.prototype.moveRight = function () {
		return this._move('right');
	};

	Drone.prototype.ping = function () {
		return $http.get(this._getBaseUrl() + 'ping');
	};

	return Drone;
});