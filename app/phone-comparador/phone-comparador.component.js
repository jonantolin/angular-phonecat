'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone',
      function PhoneComparadorController(Phone) {

        var self = this;

        self.phones = Phone.query();
        self.phone1 = null;
        self.phone2 = null;
        self.orderProp = 'age';
        self.mock ="hfdkj";

        
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
