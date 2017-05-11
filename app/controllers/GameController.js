(function(){
    'use strict';

    angular
      .module('MobApp')
      .controller('GameController', GameController);

    GameController.$inject = [];
    function GameController(){
        var ctrl = this;

        ctrl.answer1 = null;

        ctrl.checkAnswer = function(){
            ctrl.answer1 = ctrl.question1 == 0;
        };
    }
})();