'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
  	controller('ProdutosEditCtrl', [function($scope, $http, $routeParams) {
  		$scope.init = function (idproduto) {

  		};

  		$scope.init($routeParams.id);
  	}])
  	.controller('ProdutosListCtrl', [function($scope, $http) {

	}]);