/**
 * Created by xiewl on 2017/3/17.
 */
angular.module('myApp.hospitalizedList',['ui.router'])
    .controller('hospitalizedListCtrl',function ($scope) {
        $$.setPageTitle('住院缴费');
        $('.content').hide();
        var layerIndex = layer.open({
            type : 2,
            shadeClose: false
            ,content: '加载中...'
        });
        //请求住院信息
        new HttpRequest().getzypatlist(function(res){
            layer.close(layerIndex);
            if(res.code==="000"){
                $scope.hospitalizedlist= JSON.parse(res.data);
                $('.content').show();
                $scope.$apply();
            }
        })
    });