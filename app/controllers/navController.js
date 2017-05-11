(function(){
    'use strict';

    angular
      .module('MobApp')
      .controller('NavController', NavController);

    NavController.$inject = [];
    function NavController(){
            this.nav = 0;
            this.setNav = function(value){
                this.nav = value;
            };
            this.isThisNav = function(value){
                return this.nav === value;
            };

            this.items = [
                {
                    ref: '#observacoes',
                    name: 'Observações'
                },{
                    ref: '#jogo',
                    name: 'Jogo'
                },{
                    ref: '#sobre',
                    name: 'Sobre'
                }
            ];
        }
})();
