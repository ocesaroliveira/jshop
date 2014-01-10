'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.service('Produto', [
		'$http',
		function($http) {
			return {
				view: function(id, callback) {
					$http.get('backend/viewProduto.php?id=' + id)
						.success(function(data) {
							callback(data);
						});
				},

				list: function(callback) {
					$http.get('backend/listProduto.php')
						.success(function(data) {
							callback(data);
						});
				}
			};
		}
	])
	.service('Usuario', [
		'$http',
		'$rootScope',
		function($http, $rootScope) {
			return {
				add: function(usuario, callback) {
					$http.post('backend/addUsuario.php', usuario)
						.success(function(data) {
							callback(data);
						});
				},
				login: function(usuario, callback) {
					$http.post('backend/login.php', usuario)
						.success(function(data) {
							callback(data);
						});
				},
				isLogged: function() {
					return $rootScope.isLogged;
				}
			};
		}
	]);