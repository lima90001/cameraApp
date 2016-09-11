Camera App
===

###Ejemplo de como tomar una foto con ionic y colocarlo en un circulo.



* Se debe instalar el plugin de la camera actualizado

    cordova plugin add cordova-plugin-camera


* La documentación para uso del plugin esta en [https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/)  

* Esta agregado un estilo en el archivo sass ubicado en [scss/ionic.app.scss](scss/ionic.app.scss).  El estilo se debe usar de la sigueinte forma

    <ion-item class="item-profile">
        <div class="item-avatar">
          <img ng-src="{{ camera.picture }}">
        </div>
    </ion-item>

* Para usar la camara se debe inyectar el servicio en el controlador y usar como se indica en este tutorial [http://www.tutorialspoint.com/ionic/ionic_camera.htm](http://www.tutorialspoint.com/ionic/ionic_camera.htm) pero usando el plug in indicado en este documento.