'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone', 'compraMovil', '$scope',
      function PhoneComparadorController(Phone, compraMovil, $scope) {

        var self = this;

        self.phones = Phone.query();
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
        var range = [],
            min=parseFloat(min),
            max=parseFloat(max);
        for (var i=0, l=items.length; i<l; ++i){
            var item = items[i];
            if(item[attr]<=max && item[attr]>=min){
                range.push(item);
            }
        }
        return range;
    };
});
