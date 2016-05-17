(function () {
    'use strict';

    angular
        .module('QueueApp')
        .directive('customer', Customer);

    function Customer($http) {

        var directive = {
            templateUrl: '/customer/customer.html',
            restrict: 'E',
            scope: {
                customer: '=',
                onRemoved: '=',
                onServed: '='
            },
            link: function(scope){
                scope.queuedTime = new Date() - new Date(scope.customer.joinedTime);

                scope.remove = function(){
                    $http({
                        method: 'DELETE',
                        url: '/api/customer/remove',
                        params: {id: scope.customer.id}
                    }).then(function(res){
                        scope.onRemoved();
                    })
                };

                scope.serve = function (){
                    $http({
                        method: 'POST',
                        url: '/api/customer/serve',
                        params: {id: scope.customer.id}
                    }).then(function(res){
                        scope.onServed();
                    })
                }
            }
        };

        return directive;
    }
})()

