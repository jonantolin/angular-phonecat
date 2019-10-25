'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneNuevo').
  component('phoneNuevo', {
    templateUrl: 'phone-nuevo/phone-nuevo.template.html',
    controller: ['Phone', '$scope',
      function PhoneNuevoController(Phone, $scope) {

        $scope.guardar_datos = function(valido) { //recibe $valid desde la view que indica si los datos pasan la validacion


          if(!valido){ // si no pasa la validacion, no hago nada, retorno nada
              return;
          }
  
          console.log('Ha pasado la validacion y los datos van al server...........');

        }
    
      }
    ]
  });

