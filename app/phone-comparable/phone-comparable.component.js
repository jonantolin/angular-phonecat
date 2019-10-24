'use strict';

// Register `phoneList` component, along with its associated controller and template
var comparableModule = angular.module('phoneComparable');


comparableModule.component('phoneComparable', {
    templateUrl: 'phone-comparable/phone-comparable.template.html',
    bindings: {
      pphone1: '=',
      pphone2: '='
    },
    controller: ['compraMovil', '$scope',
      function PhoneComparableController(compraMovil, $scope) {

        var self = this;

        this.comprarMovil = function(movil){
          // compraMovil.setProducto(movil); // Para mandar al servicio comun, pero lo hare por evento
          $scope.$emit('eventoCompra',{telefono: movil} );
          compraMovil.setProducto(movil);
        }


      }]
    
  });


comparableModule.directive('valorComparable', function(){
  
  var objetoDirectiva = {
    
      restrict: 'E',
      replace: true,
      template:"<span class='label label-{{clase}}'> {{(resultado == 0)?'=':resultado}}</span>",
      link:function(scope, iElement, iAttrs, controller, transcludeFn) {
              
        scope.resultado = iAttrs.val1 - iAttrs.val2;
        
        if(scope.resultado > 0){
          scope.clase = "success";
        }else if(scope.resultado < 0){
          scope.clase = "danger";
        }else{
          scope.clase = "info";
        }

      }
  }
  return objetoDirectiva;
 
});
