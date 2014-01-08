'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('ngUnique', [
        '$http',
        function($http) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, elm, attrs, ctrl) {
                    ctrl.$parsers.unshift(function(value) {
                        var url = 'backend/validaUnique.php?v=' + value + '&f=' + attrs.ngUnique;
                        $http.get(url)
                            .success(function(data) {
                                ctrl.$setValidity('unique', data.status);
                            });
                    });
                }
            }
        }
    ]);