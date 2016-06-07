(function () {
    'use strict'

    angular.module('shawApp').factory('PalindromeService', PalindromeService);

    angular.$inject = ['$http'];
    function PalindromeService($http) {
        var service = {};

        service.verify = verify;
        return service;

        function verify(setence) {
            return $http.get('api/palindrome/' + setence);
        }

    }
})();