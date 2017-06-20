/* global malarkey:false, moment:false */
(function() {
  'use strict';

  var constant = {
    "malarkey": malarkey,
    "moment": moment,
    "baseUrl": "http://api.openweathermap.org/",
    "apiKey": "c758457e9ce4ddff1a4775e7b8bf7921"
  }

  angular
    .module('WeatherApp')
    .constant('constants', constant)

})();
