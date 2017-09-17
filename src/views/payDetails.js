/**
 * Created by lw on 2017/3/20.
 */
angular.module('myApp.payDetails',['ui.router'])
.controller('payDetailsCtrl',function ($scope,$stateParams) {
    window.recipeOrderCallback = function (res) {
        if(res == 1) history.go(-1);
        else if(res == 2) location.replace('#!/paylist/2');
    };
    $$.setPageTitle('缴费详情');
    //获取缴费详情数据
    if(localStorage.NH_recipeModal){
        var recipeModal = JSON.parse(localStorage.NH_recipeModal)
        if(recipeModal.recipeno === $stateParams.recipeno){
            $scope.detail = recipeModal.data;
        }else{
            layer.open({
                content: '详情获取失败'
                ,skin: 'msg'
                ,time : 5
            })
        }
    }else{
        layer.open({
            content: '详情获取失败'
            ,skin: 'msg'
            ,time : 5
        });
    }
    //生成缴费订单
    $scope.createOrder = function () {
        var layerIndex = layer.open({
            type : 2,
            shadeClose: false
            ,content: '加载中...'
        });
        new HttpRequest().createRecipeOrder({
            cardno : $scope.detail.cardno,
            recipeid : $scope.detail.recipeid,
            price : $scope.detail.recipeamount,
            execlocation : $scope.detail.execlocation,
            execdate : $scope.detail.execdate,
            recipename : $scope.detail.recipename
        },function (res) {
            layer.close(layerIndex);
            if(res.code === '000'){
                var data = JSON.parse(res.data);
                location.href = 'leley://orderpayment?rid='+ data.orderid +'&service_catalog=recipe&callback=recipeOrderCallback';
            }
        })
    }
});