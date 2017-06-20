(function () {
    'use strict';

    angular
        .module('WeatherApp')
        .controller('WeatherForecastController', WeatherForecastController);

    WeatherForecastController.$inject = ['weatherService'];

    function WeatherForecastController(weatherService) {
        // initialize data (variables)
        var vm = this;
        vm.forecast = false;
        vm.countryId = 0;

        //method declarations
        vm.getCountries = getCountries;
        vm.getUpcomingForecast = getUpcomingForecast;

        //call data initially
        vm.getCountries();

        //get the countries and its current temperature forecast
        function getCountries() {
            weatherService.getCountryList().then(resolver, rejector);
            //if success
            function resolver(response) {
                vm.countries = response.data;
                geteCountryForecast();
            }

            //if reject
            function rejector(response) {
                console.log(response);
            }
        }
        //get countries current forecast
        function geteCountryForecast() {
            var countriesWithoutForecast = vm.countries.filter(function (item) { return !item.forecast; });
            countriesWithoutForecast.forEach(function (country) {
                weatherService.getForecastForCountry(country.id).then(function (response) {
                    country.forecast = response.data; //adding a forecast
                });
            });
        };

        //get 5 days forecast of country
        function getUpcomingForecast(countryId) {
            vm.countryId = countryId;
            weatherService.getUpcomingForecast(countryId).then(resolver, rejector);
            //if success
            function resolver(response) {
                vm.futureForecast = response.data;
            }

            //if reject
            function rejector(response) {
                console.log(response);
            }
        }
    }
})();