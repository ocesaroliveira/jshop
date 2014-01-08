'use strict';

/* Directives */


angular.module('myApp.directives', [])
  	.directive('cortaStr', [
        function() {
    	    return {
    	    	restrict: 'A',
    	    	scope: {
    	    		text: '=text'
    	    	},
    	    	link: function(scope, elm, attrs) {
    	    		var limiteStr = attrs.limiteStr || 100;
    	    		var txtSubStr = attrs.txtSubStr || '...';

    	    		var text = scope.text;
    	    		if (text.length > limiteStr) {
    	    			text = text.substr(0, limiteStr);
    	    			text = text.split(' ');
    	    			text = text.splice(0, text.length - 1);
    	    			text = text.join(' ');
    	    			text += txtSubStr;
    	    		}
        			elm.context.innerHTML = text;
    		    }
    	    }
        }
  	])
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