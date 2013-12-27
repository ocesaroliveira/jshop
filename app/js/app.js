'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'view/produtos_list.html', controller: 'ProdutosListCtrl'});
	$routeProvider.when('/view/:id', {templateUrl: 'view/produtos_edit.html', controller: 'ProdutosEditCtrl'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);
