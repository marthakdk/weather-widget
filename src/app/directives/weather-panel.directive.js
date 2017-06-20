(function () {
    'use strict';
    function WeatherPanel() {
        return {
            restrict: 'EA',

            scope: {
                useDayForecast: '=showEntry',
                forecast: '=weatherPanel'
            },

            templateUrl: 'app/directives/templates/weather-panel.template.html',

            link: function (scope, element, attrs) {
                scope.parseDate = function (time) {
                    return new Date(time * 1000);
                };
            }
        }
    }
    angular.module("WeatherApp").directive("weatherPanel", WeatherPanel);
})();