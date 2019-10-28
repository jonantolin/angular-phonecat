'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneNuevo').
  component('phoneNuevo', {
    templateUrl: 'phone-nuevo/phone-nuevo.template.html',
    controller: ['$routeParams', 'Phone', '$scope', 
      function PhoneNuevoController($routeParams, Phone, $scope) {

        self = this;
        self.mensaje = null;

        $scope.datosForm = {};

        let id = $routeParams.phoneId;
        if(id){

          Phone.getById(id).then(
            (res)=>{
              console.debug('telefono encontrado');
              $scope.datosForm = res.data;
            },
            ()=>{
              console.warn('telefono NO encontrado');
            }
          );

        }


        $scope.guardar_datos = function(valido) { //recibe $valid desde la view que indica si los datos pasan la validacion

          

          if(!valido){ // si no pasa la validacion, no hago nada, retorno nada
              return;
          }
  
          console.log('Ha pasado la validacion y los datos van al server...........');

         

          if(!id){
          var movil = {
            "name": $scope.formuMovil.name.$viewValue,
            "snippet": $scope.formuMovil.snippet.$viewValue,
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

          }else{

            Phone.update($scope.datosForm.id, $scope.datosForm).then(
              response => {
                console.log("Movil actualizado %o", response);
                self.agregado = true;
                self.mensaje = "Móvil actualizado";
              },
              response =>{ 
                console.warn("Error actualizando movil %o", response);
                self.agregado = false;
                self.mensaje = "Error. No se ha podido actualizar el móvil";
                
              }

            );


          }

        }
    
      }
    ]
  });

