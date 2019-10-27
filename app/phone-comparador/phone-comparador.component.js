'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone', '$scope',
      function PhoneComparadorController(Phone, $scope) {

        var self = this;

        self.phone1 = null; // el movil que sera pasado al primer componente 'comparable'
        self.phone2 = null; // el movil que sera pasado al segundo componente 'comparable'
        self.orderProp = 'age';
        
        // valores iniciales para el filtro de ram
        $scope.memMin = 0;
        $scope.memMax = 35000;

        /**
         * Llamada al servicio REST para cargar la lista vertical
         */
        Phone.getAll().
        then( 
          function successCallback(response) {
            console.info("Success");
            self.phones = response.data;
          },
          function errorCallback(response) {
            console.warn("Error");
          }
        );
        

        /**
         * Evento capturado cuando componente 'comparable' emite 'eventoCompra' (al pulsar en 'Comprar')
         */
        $scope.$on('eventoCompra', function(event, data){
          self.productoCompra = data.telefono;
        });

      
        /**
         * Funcion para establecer en los componentes 'comparable' los phones seleccionados de la lista
         */
        this.seleccionar = function(phone){

          if(self.phone1 != null && self.phone2 != null){
            self.phone1 = null;
            self.phone2 = null;
          }

         
          if(self.phone1 == null){
           self.phone1 = phone;
          }else{
            self.phone2 = phone;
          }

         
        }// end seleccionar
      } //end function controller
    ] //end controller
  });//end component

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

