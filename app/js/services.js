'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngCookies'])
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
		'$cookieStore',
		function($http, $rootScope, $cookieStore) {
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
							if (data.status) {
		                        $rootScope.isLogged = true;
		                        $rootScope.idUserLogged = data.idusuario;
		                        $cookieStore.put('dadosUsuario', usuario);
		                    } else {
		                    	var usuario = $cookieStore.get('dadosUsuario');
								if (typeof usuario == 'object') {
									$cookieStore.remove('dadosUsuario');
								}
		                        $rootScope.isLogged = false;
		                        alert('E-mail/senha inválidos. Por favor, tente novamente');
		                    }
							callback(data);
						});
				},
				logout: function(callback) {
					$cookieStore.remove('dadosUsuario');
                    $rootScope.isLogged = false;
                    $rootScope.idUserLogged = null;
                    callback();
				},
				isLogged: function() {
					if (!$rootScope.isLogged) {
						var usuario = $cookieStore.get('dadosUsuario');
						if (typeof usuario == 'object') {
							this.login(usuario, function(data) { });
							return true;
						}
						return false;
					}
					return true;
				}
			};
		}
	]);