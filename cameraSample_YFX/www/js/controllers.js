angular.module('controllers', [])
  .controller('CameraCtrl', function(CameraService) {
    var vm = this;

    vm.takePic = function(type) {
      //Aquí se puede configurar las caracteristicas de la foto como la resolución
      //La lista completa de opciones, como la calidad,  esta en https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/#module_camera.CameraOptions
      var options = {
        quality: 75,
        sourceType: type
      };

      CameraService.getPicture(options).then(function(imageData) {
        vm.picture = imageData;
      }, function(error) {
        console.log(error);
      });
    };
  });