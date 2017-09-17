/**
 * Created by xiewl on 2017/3/20.
 */
angular.module('myApp.reportDetail',['ui.router'])
    .controller('reportDetailCtrl',function ($scope,$stateParams) {
        $$.setPageTitle('检查明细');
        var layerIndex = layer.open({
            type : 2,
            shadeClose: false
            ,content: '加载中...'
        });
        $('.content').hide();
        new HttpRequest().getReportDetail({
            'cardno' : $stateParams.cardno,
            'inspecno' : $stateParams.inspecno
        },function (res) {
            layer.close(layerIndex);
            if(res.code === '000'){
                $('.content').show();
                var resData = JSON.parse(res.data).item;
                $scope.detail = JSON.parse(res.data);
                $scope.detail.item = [];
                resData.map(function (index,i) {
                    if(index.itemname){
                        if(index.itemname.split('—').length>5){//判断名称是否是总名称如---**---
                            index.colSpan = true;
                        }else {
                            index.colSpan = false;
                        }
                        $scope.detail.item.push(resData[i])
                    }
                });
                $scope.$apply();
            }
        })
    });