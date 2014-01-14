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
		$routeProvider.when('/cadastro', {templateUrl: 'view/usuarios_add.html', controller: 'UsuariosAddCtrl'});
		$routeProvider.when('/login/:id', {templateUrl: 'view/usuarios_login.html', controller: 'UsuariosLoginCtrl'});
		$routeProvider.when('/view/:id', {templateUrl: 'view/produtos_view.html', controller: 'ProdutosViewCtrl'});
		$routeProvider.when('/buy/:id', {templateUrl: 'view/produtos_buy.html', controller: 'ProdutosBuyCtrl'});
		$routeProvider.otherwise({redirectTo: '/'});
	}]);
