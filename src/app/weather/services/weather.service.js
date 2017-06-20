(function () {
    'use strict';
    angular.module('WeatherApp').service('weatherService', weatherService);
    weatherService.$inject = ['$http', 'constants'];

    /* not using ngInject */
    function weatherService($http, constants) {
        return {
            getCountryList: getCountryList,
            getForecastForCountry: getForecastForCountry,
            getUpcomingForecast: getUpcomingForecast
        }

        function getCountryList() {
            return $http.get('app/weather/services/weather-data/country-list.json');
        }
        function getForecastForCountry(countryId) {
            var url = constants.baseUrl + "data/2.5/weather?id=";
            var params = countryId + "&units=metric&APPID="+ constants.apiKey ;
            return $http.get(url + params);
        }
        function getUpcomingForecast(countryId){
            var url = constants.baseUrl + "data/2.5/forecast?id=";
            var params = countryId + "&units=metric&APPID="+ constants.apiKey ;
            return $http.get(url + params);
        }
    }
})();