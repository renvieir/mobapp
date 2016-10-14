angular.module("MobApp").controller('ObservationFormController', function(){
    this.observation = {}
    this.addObservation = function(obs){
        this.observation = obs;
    }
});