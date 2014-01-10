'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
		'ngRoute',
		'myApp.filters',
		'myApp.services',
		'myApp.directives',
		'myApp.controllers',
		'ui.bootstrap.pagination',
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {templateUrl: 'view/produtos_list.html', controller: 'ProdutosListCtrl'});
		$routeProvider.when('/cadastro', {templateUrl: 'view/usuarios_add.html', controller: 'UsuarioAddCtrl'});
		$routeProvider.when('/login', {templateUrl: 'view/usuarios_login.html', controller: 'UsuarioLoginCtrl'});
		$routeProvider.when('/view/:id', {templateUrl: 'view/produtos_edit.html', controller: 'ProdutosEditCtrl'});
		$routeProvider.otherwise({redirectTo: '/'});
	}]);
