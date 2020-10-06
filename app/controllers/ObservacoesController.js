(function () {
  'use strict';

  angular
    .module('MobApp')
    .controller('ObservacoesController', ObservacoesController);

  ObservacoesController.$inject = [];
  function ObservacoesController() {
    this.observation = {
      sensation: 'nenhum',
      mucus_quantity: 'nenhum',
      mucus_color: ''
    }
    var textStorage = localStorage.getItem('observacoes');
    this.observacoes = textStorage ? JSON.parse(textStorage) : [];

    this.addObservation = function () {
      this.observacoes.push(angular.copy(this.observation));
      localStorage.setItem('observacoes', JSON.stringify(this.observacoes))
    };
  }
})();