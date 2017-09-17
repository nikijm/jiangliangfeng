/**
 * Created by xiewl on 2017/3/17.
 */
angular.module('myApp.hospitalizedDetail',['ui.router'])
    .controller('hospitalizedDetailCtrl',function ($scope,$stateParams) {
        $$.setPageTitle('住院详情');
        new HttpRequest().leleyStatistics({
            'type':'load',
            'opt':'hosptalizationDetail',
            'tag':'6'
        });
        $('.content').hide();
        var inpatientid = $stateParams.inpatientid;
        if(inpatientid.indexOf('ZY') >= 0) inpatientid = $stateParams.inpatientid.substr(4,10);
        new HttpRequest().getHospitalDetail({
            inpatientid : inpatientid,
            name : decodeURI($stateParams.name)
        },function (res) {
            if(res.code === '000'){
                if(JSON.parse(res.data).item){
                    $('.content').show();
                    $scope.zypatdetail = JSON.parse(res.data).item[0];
                    $scope.$apply();
                }else{
                    layer.open({
                        content: '住院详情查询失败，请稍后重试'
                        ,skin: 'msg'
                    });
                }
            }else{
                setTimeout(function () {
                    history.go(-1);
                },3000);
            }
        });
    });