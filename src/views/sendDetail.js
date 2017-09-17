angular.module('myApp.sendDetail',['ui.router'])
    .controller('sendDetailCtrl',function ($scope, $compile, $stateParams,$state) {
       $$.setPageTitle('寄送详情');
       console.log('ssss',sessionStorage.getItem("time"))
        $scope.modalShow = false;
        $scope.cancelorder = true;
        $scope.reportsList = {}
        $scope.reportsDetails = {} //订单详情
         $scope.startTime= localStorage.startTime;
          var nowTime =new Date();
          var ms =nowTime.getTime();
          var endms =nowTime.getTime() + 60*10*1000;
          var endTimes =  new Date(ms).getMinutes()
          console.log(endTimes - $scope.startTime)
       $scope.reportsList.deliveryOrderId = $stateParams.deliveryOrderId
        if (endTimes - $scope.startTime > 10) {
            $scope.cancelorder = false;
        }

       new HttpRequest().sendDetail($scope.reportsList,function(res){
        	$scope.reportsDetails = JSON.parse(res.data)
          $scope.$apply()

       })
       //取消订单
        $scope.cancelModalShow = function () {
            $scope.modalShow = true;
        }
        $scope.toExpressDetail=function() {
          $state.go("expressdetail", {deliveryOrderId: $scope.reportsList.deliveryOrderId})
        }
    });