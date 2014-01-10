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
    ])
    .controller('UsuarioAddCtrl', [
        '$scope',
        '$location',
        'Usuario',
        function($scope, $location, Usuario) {
            $scope.usuario = null;

            $scope.enviarUsuario = function() {
                Usuario.add($scope.usuario, function(data) {
                    if (data.status) {
                        alert('Usuario cadastrado com sucesso!');
                        $location.path('/');
                    }
                });
            };
        }
    ])
    .controller('UsuarioLoginCtrl', [
        '$scope',
        '$rootScope',
        'Usuario',
        function($scope, $rootScope, Usuario) {
            $scope.usuario = null;

            $scope.login = function() {
                Usuario.login($scope.usuario, function(data) {
                    if (data.status) {
                        $rootScope.isLogged = true;
                        $location.path('/');
                    }
                });
            };
        }
    ])
    .run(function($rootScope) {
        $rootScope.isLogged = false;
    });