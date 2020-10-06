(function(){
    angular.module('MobApp',['ngRoute']).config(function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'app/templates/directives/mob-call-to-action.html'
        })
        .when('/sobre',{
            templateUrl: 'app/templates/pages/about.html'
        })
        .when('/observacoes', {
            templateUrl: 'app/templates/pages/observacoes.html'
        })
        /*.when('/hardware', {
            templateUrl: 'hardware.html'
        })*/
        .when('/charts', {
            templateUrl: 'charts.html'
        })
        .when('/jogo', {
            templateUrl: 'app/templates/pages/game.html'
        })
        .otherwise('/');
        ;
    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
})();
