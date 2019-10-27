'use strict';

angular.
  module('core.phone').factory('Phone', ['$http',  function($http) {

    let service = [];
    let endpoint = "http://localhost:3000/phones/";

    service.getAll = function(){      
       console.log('GET ' + endpoint);
       return $http.get(endpoint);
    }


     service.getById = function( id ){
       let url = endpoint + id;
       console.log('GET ' + url);
       return $http.get(url);
     }

     service.insert = function( movil ){
      let url = endpoint;
      console.log('POST ' + url);
      return $http.post(url, movil);
    }

     return service;
   }
 ]);