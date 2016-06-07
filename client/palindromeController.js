(function () {
    'use strict'

    angular.module('shawApp').controller('PalindromeController', PalindromeController);

    angular.$inject = ['PalindromeService'];
    function PalindromeController(PalindromeService) {
        var self = this;
        self.verify = verify;

        function verify(){
        	PalindromeService.verify(self.setence).success(function(response){
        		self.verified = true;
    			self.isPalindrome = true;
        	}).error(function(response){
        		self.verified = true;
				self.isPalindrome = false;
        	});
        }

    }
})();