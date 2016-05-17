(function () {
    angular.module('QueueApp')
        .directive('addCustomer', AddCustomer)

    function AddCustomer($http){
        return {
            restrict: 'E',
            scope:{
                onAdded: '=',
                customers: '=',
            },
            templateUrl:'/add-customer/add-customer.html',
            link: function(scope){

                scope.products = [
                    {name: 'Grammatical advice'},
                    {name: 'Magnifying glass repair'},
                    {name: 'Cryptography advice'}
                ];

                scope.addCustomer = function(){
                    $http({
                        method: 'POST',
                        url: '/api/customer/add',
                        params: {name: scope.customer.name, product: scope.customer.product}
                    }).then(function(res){
                        scope.onAdded();
                    })
                }
            }
        }
    }

})()

