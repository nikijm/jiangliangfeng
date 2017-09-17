angular.module('myApp.expressDetail', ['ui.router'])
.controller('expressDetailCtrl',function($scope,$compile,$stateParams) {
    $$.setPageTitle('物流详情');
    console.log($stateParams)
    $scope.express ={}
    $scope.express.deliveryOrderId =  $stateParams.deliveryOrderId
     new HttpRequest().sendExpress($scope.express,function(res){
        	$scope.expressDetails = JSON.parse(res.data)
        	console.log($scope.expressDetails)

       })
});