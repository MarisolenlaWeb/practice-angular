/*IIFE*/
(function(){
    'use strict'
    
    var home = {
        controller: homeController, 
        templateUrl: "./views/home/home.html" 
    };

    function homeController(){
        var asController = this;
 
  };

    angular
        .module('conecta')
        .controller('homeController', homeController); 
    
})();