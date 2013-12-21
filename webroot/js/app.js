// angular.module('jshop', ['firebase'])
angular.module('jshop', [])
    // .controller('Chat', [
    //     '$scope',
    //     '$firebase',
    //     function($scope, $firebase) {
    //         var ref = new Firebase('https://jshop.firebaseio.com/');

    //         $scope.messages = $firebase(ref.limit(15));

    //         $scope.username = '';

    //         $scope.addMessage = function() {
    //             $scope.messages.$add({
    //                 from: $scope.username, content: $scope.message
    //             });
    //             $scope.message = "";
    //         }
    //     }
    // ])
    .value('init', {
        construct: function(dados) {
            this.dados = dados;
        }
    })
    .run(function($http, init) {
        $http.post('login.php', {teste: 'teste'})
            .success(function(data, status) {
                init.construct(data);
            })
            .error(function(data, status) {});
    })
    .controller('Login', [
        '$scope',
        'init',
        function ($scope, init) {
            $scope.habilidades = init.dados;
        }
    ]);