(function() {
    'use strict';

    angular
        .module('WeatherApp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('list', {
                url: '/',
                templateUrl: 'app/weather/weather.html',
                controller: 'WeatherForecastController',
                controllerAs: 'ctrlWeather'
            })

        $urlRouterProvider.otherwise('/');
    }

})();