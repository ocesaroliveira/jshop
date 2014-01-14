'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
    controller('ProdutosViewCtrl', [
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
    .controller('UsuariosAddCtrl', [
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
    .controller('UsuariosLoginCtrl', [
        '$scope',
        '$rootScope',
        '$routeParams',
        '$location',
        'Usuario',
        function($scope, $rootScope, $routeParams, $location, Usuario) {

            $scope.usuario   = null;
            $scope.idproduto = null;

            $scope.init = function() {
                if (typeof $routeParams.id != 'undefined') {
                    $scope.idproduto = $routeParams.id;
                }
            }

            $scope.login = function() {
                Usuario.login($scope.usuario, function(data) {
                    if (data.status) {
                        $rootScope.isLogged = true;
                        $rootScope.idUserLogged = data.idusuario;
                        if ($scope.idproduto != null) {
                            $location.path('/buy/' + $scope.idproduto);
                        } else {
                            $location.path('/');
                        }
                    }
                });
            };

            $scope.init();
        }
    ])
    .controller('ProdutosBuyCtrl', [
        '$scope',
        '$rootScope',
        '$routeParams',
        '$location',
        'Usuario',
        'Produto',
        function($scope, $rootScope, $routeParams, $location, Usuario, Produto) {

            $scope.produto   = null;
            $scope.idproduto = null;
            $scope.quantidade = 1;

            $scope.init = function(idproduto) {
                $scope.idproduto = idproduto;
                if (Usuario.isLogged()) {
                    Produto.view(idproduto, function (data) { $scope.produto = data; });
                } else {
                    alert('Você deverá se logar antes para comprar um produto');
                    $location.path('/login/' + idproduto);
                }
            };

            $scope.comprar = function() {
                var dados = {
                    idproduto: $scope.idproduto,
                    quantidade: $scope.quantidade,
                    idusuario: $rootScope.idUserLogged
                };
                Produto.adicionarCarrinho(dados);
            };

            $scope.init($routeParams.id);
        }
    ])
    .run(function($rootScope) {
        $rootScope.isLogged = false;
    });