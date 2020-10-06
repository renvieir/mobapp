(function(){
    'use strict';
    angular
      .module("MobApp")
      .controller('ObservationFormController', ObservationFormController);

    ObservationFormController.$inject = [];
    function ObservationFormController(){
        this.observation = {
            sensation: 'nenhum',
            mucus_quantity: 'nenhum',
            mucus_color: ''
        }
        this.observations = [];
        this.addObservation = function(){
            var obs = this.observation;
            this.observations.push(angular.copy(obs));
        };
    }
})();
