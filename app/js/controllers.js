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
  			$scope.produto = null;

  			$scope.init = function (idproduto) {
  				$scope.idproduto = idproduto;
  				Produto.view(idproduto, function (data) { $scope.produto = data; });
  			};

  			$scope.init($routeParams.id);
  		}
	])
  	.controller('ProdutosListCtrl', [
  		'$scope',
  		'Produto',
  		function($scope, Produto) {

			$scope.currentPage = 1;
			$scope.limitItems = 3;

			// Dados para filtragem
			$scope.busca = '';
			$scope.ordenar = 'nome';
			$scope.ordemOrdenacao = true;

	  		$scope.produtos = [];

	  		$scope.ordenarPor = function(valor) {
	  			$scope.ordenar = valor;
	  		};

	  		$scope.init = function () {
	  			Produto.list(function (data) { $scope.produtos = data; });
	  		};

	  		$scope.init();
		}
	]);