'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone', 'compraMovil', '$scope',
      function PhoneComparadorController(Phone, compraMovil, $scope) {

        var self = this;

        this.$onInit = function(){
          $scope.listaMoviles();
        }

        $scope.listaMoviles = function(){
        Phone.getAll().
        then( 
          function successCallback(response) {
            console.trace("Success");
            self.phones = response.data;
          },
          function errorCallback(response) {
            console.warn("Error");
          }
        );

        
        };
        self.phone1 = null;
        self.phone2 = null;
        self.orderProp = 'age';
     
        // Esto esta bien para mandar mensajes a traves de un servicio pero lo recojo en un evento
       /* self.productoCompra = function(){
          // return compraMovil.getProducto(); Esto esta bien para mandar mensajes a traves de un servicio
          
        }*/

        
        $scope.memMin = 0;
        $scope.memMax = 35000;
        

        $scope.$on('eventoCompra', function(event, data){

          self.productoCompra = data.telefono;
        });
    
        this.seleccionar = function(phone){

          if(self.phone1 != null && self.phone2 != null){
            self.phone1 = null;
            self.phone2 = null;
          }

         
          if(self.phone1 == null){
           // self.phone1 = phone;
           self.phone1 = phone;
          }else{
            self.phone2 = phone;
          }

         
        }
      }
    ]
  });

  /**
   * Filtro para filtrar por rango (de ram, etc)
   */
  
  angular.
  module('phoneComparador')
  .filter('rangeFilter', function () {
    return function (items, attr, min, max) {
        return items.filter(item => {
            if(item[attr]<=parseFloat(max) && item[attr]>=parseFloat(min)){
              return item;
            }
          });
    };

    // poner en template -> | rangeFilter:'ram':memMin:memMax
});

