'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
  	controller('ProdutosEditCtrl', [
  		'$scope',
  		'$http',
  		'$routeParams',
  		'Produto',
  		function($scope, $http, $routeParams, Produto) {

  			$scope.idproduto = null;
  			$scope.init = function (idproduto) {
  				$scope.idproduto = idproduto;
  				Produto.view(idproduto);
  			};

  			$scope.init($routeParams.id);
  		}
	])
  	.controller('ProdutosListCtrl', [
  		'$scope',
  		'$http',
  		function($scope, $http) {

			$scope.currentPage = 1;
			$scope.limitItems = 3;

			// Dados para filtragem
			$scope.busca = '';
			$scope.ordenar = 'nome';
			$scope.ordemOrdenacao = true;

	  		$scope.produtos = [
	  			{id: 1, nome: 'Notebook HP', preco: 1000.00},
	  			{id: 2, nome: 'Notebook Dell', preco: 2000.00},
	  			{id: 3, nome: 'Notebook Acer', preco: 1200.00},
	  			{id: 4, nome: 'Macbook PRO', preco: 4000.00},
	  			{id: 5, nome: 'Notebook Positivo', preco: 800.00}
	  		];

	  		$scope.ordenarPor = function(valor) {
	  			$scope.ordenar = valor;
	  		};
		}
	]);