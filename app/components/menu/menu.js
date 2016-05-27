/*IIFE*/
(function(){
    'use strict'
    
    var menu = {
        controller: menuCtrl,
        template: `
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul class="nav navbar-nav">
                  <li class="active"><a href="#">Home</a></li>
                  <li><a href="#">Page 1</a></li>
                  <li><a href="#">Page 2</a></li> 
                  <li><a href="#">Page 3</a></li> 
                </ul>
              </div>
            </nav>
        `   
    };

    function menuCtrl(){
        var asController = this;
 
  };

    angular
      .module('practica')
      .component('menu', menu); 
})();