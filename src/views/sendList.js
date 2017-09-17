angular.module('myApp.sendList',['ui.router'])
.controller('sendListCtrl',function ($scope, $compile,$state, $stateParams) {
 $$.setPageTitle('报告寄送记录')
 $scope.listDatas = {}
 $scope.isScroll=true;
 $scope.orderModel={
            "pageNo":1,//页数
            "pageSize":10,  //每页大小
          }
          $scope.getOrderList=function (page) {
           $scope.isScroll=false;
            // if(page == 1){
            //     var layerIndex = layer.open({
            //         type : 2,
            //         shadeClose: false
            //         ,content: '加载中...'
            //     });
            // }
            // if(page){
            //     $scope.orderModel.pageNo=page;
            // }
            new HttpRequest().sendMyRecord($scope.orderModel, function(res){

              if(res.code == '000'){
                $scope.listDatas = JSON.parse(res.data).deliveryList
                $scope.$apply()
                if($scope.listDatas.length >= 10){
                  $scope.isScroll=true;
                }
                $scope.$apply();
              }
            })
          }
          $scope.getOrderList($scope.orderModel.pageNo);
          $scope.toDetails=function (item) {
           $state.go("senddetail", {deliveryOrderId: item.hisDeliveryOrderId})
         }

         $(window).scroll(function () {
          if($scope.isScroll){
                var scrollTop = $(this).scrollTop();    //滚动条距离顶部的高度
                var scrollHeight = $(document).height();   //当前页面的总高度
                var clientHeight = $(this).height();    //当前可视的页面高度
                if(scrollTop + clientHeight >= scrollHeight){   //距离顶部+当前高度 >=文档总高度 即代表滑动到底部 count++;
                  $scope.orderModel.pageNo++;
                  $scope.getOrderList($scope.orderModel.pageNo);
                }
              }
            })
       });