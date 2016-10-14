angular.module('MobApp')
    .controller('NavController', function(){
        this.nav = 0;
        this.setNav = function(value){
            this.nav = value;
        };
        this.isThisNav = function(value){
            return this.nav === value;
        };
    });
