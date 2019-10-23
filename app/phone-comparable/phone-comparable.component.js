'use strict';

// Register `phoneList` component, along with its associated controller and template
var comparableModule = angular.module('phoneComparable');


comparableModule.component('phoneComparable', {
    templateUrl: 'phone-comparable/phone-comparable.template.html',
    bindings: {
      pphone1: '=',
      pphone2: '='
    },
    controller: 
      function PhoneComparableController() {

        var self = this;


      }
    
  });


comparableModule.directive('valorComparable', function(){
  
  var objetoDirectiva = {
    // <span class="label label-success" ng-show="($ctrl.pphone1.flash - $ctrl.pphone2.flash) < 0"> {{$ctrl.pphone1.flash - $ctrl.pphone2.flash}}</span>
      template:"<span class='{{clase}}'> {{(resultado == 0)?'=':resultado}}</span>",
      link:function(scope, iElement, iAttrs, controller, transcludeFn) {
       // alert(iAttrs.prueba);
        
        scope.resultado = iAttrs.val1 - iAttrs.val2;
        if(scope.resultado > 0){
          scope.clase = "label label-success";
        }else if(scope.resultado < 0){
          scope.clase = "label label-danger";
        }else{
          scope.clase = "label label-info";
        }

      }
  }
  return objetoDirectiva;
 
});
