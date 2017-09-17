/**
 * Created by zengy on 2017/3/22.
 */

angular.module('myApp.patientIdCardList',['ui.router'])
    .controller('patientIdCardListCtrl',function ($scope,$stateParams) {
        $$.setPageTitle('就诊卡');
        $scope.flag = $stateParams.type === 'choice';
        var layerIndex = layer.open({
            type : 2,
            shadeClose: false
            ,content: '加载中...'
        });
        new HttpRequest().getMedicalCard(function (res) {
            layer.close(layerIndex);
            if(res.code === '000'){
                $scope.patientIdList = JSON.parse(res.data);
                $scope.$apply();
            }
        });
    });