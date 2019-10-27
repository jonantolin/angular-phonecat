'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneNuevo').
  component('phoneNuevo', {
    templateUrl: 'phone-nuevo/phone-nuevo.template.html',
    controller: ['Phone', '$scope',
      function PhoneNuevoController(Phone, $scope) {

        self = this;
        self.mensaje = null;

        $scope.guardar_datos = function(valido) { //recibe $valid desde la view que indica si los datos pasan la validacion

          

          if(!valido){ // si no pasa la validacion, no hago nada, retorno nada
              return;
          }
  
          console.log('Ha pasado la validacion y los datos van al server...........');

         

          var movil = {
            "name": $scope.formuMovil.name.$viewValue,
            "snippet": $scope.formuMovil.description.$viewValue,
            "imageUrl": "img/phones/movil-generico.svg",
            "ram": parseInt($scope.formuMovil.ram.$viewValue),
            "flash":  parseInt($scope.formuMovil.flash.$viewValue)
          }

          Phone.insert(movil).then(
            response => {
              console.log("Movil insertado %o", response);
              self.agregado = true;
              self.mensaje = "Móvil añadido";
            },
            response =>{ 
              console.warn("Error insertando movil %o", response);
              self.agregado = false;
              self.mensaje = "Error. No se ha podido agregar el móvil";
              
            }
          );

        }
    
      }
    ]
  });

