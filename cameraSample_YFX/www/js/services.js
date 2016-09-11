angular.module('starter.cameraService', [])
  .factory('CameraService', function($q) {
    return {
      getPicture: function(options) {
        var q = $q.defer();

        navigator.camera.getPicture(function(result) {
          q.resolve(result);
        }, function(error) {
          q.reject(error)
        }, options);

        return q.promise;
      }
    }
  });