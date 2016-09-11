angular.module('starter.controllers', [])
  .controller('ChatsCtrl', function(CameraService) {

    $scope.takePic = function(type) {
      var options = {
        quality: 75,
        sourceType: type
      };

      CameraService.getPicture(options).then(function(imageData) {
        $scope.picture = imageData;
      }, function(error) {
        console.log(error);
      });
    };
  });