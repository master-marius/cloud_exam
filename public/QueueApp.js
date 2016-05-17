(function () {
    'use strict';

    var QueueApp = angular.module("QueueApp", []);

    QueueApp.controller('QueueCtrl', function($scope, $http) {
        
        $scope.customers = [];
        $scope.customersServed = [];
        _getCustomers();
        _getServedCustomers();

        function _getCustomers(){
            return $http.get('/api/customers').then(function(res){
                $scope.customers = res.data;
            })
        }

        function _getServedCustomers(){
            return $http.get('/api/customers/served').then(function(res){
                $scope.customersServed = res.data;
            })
        }

        $scope.onCustomerAdded = function(){
            _getCustomers();
        }

        $scope.onCustomerRemoved = function(){
            _getCustomers();
        }

        $scope.onCustomerServed = function(){
            _getCustomers();
            _getServedCustomers()
        }
    });

    /**asd
     * Bonus points - manipulating the without waiting for the
     * server request
     */
})()

