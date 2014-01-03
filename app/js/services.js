'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
	service('Produto', [
		'$http',
		function($http) {
			return {
				view: function(id) {
					$http.get('backend/viewProduto.php')
					// $http.get('backend/viewProduto.php?id=' + id)
						.success(function(data) {
							console.log(data);
						})
				}
			}
		}
	]);