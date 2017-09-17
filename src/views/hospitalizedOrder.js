angular.module('myApp.hospitalizedOrder',['ui.router'])
.controller('hospitalizedOrderCtrl',function ($scope,$stateParams) {
    $$.setPageTitle('住院清单');
    new HttpRequest().leleyStatistics({
        'type':'word',
        'opt':'hosptalizationList',
        'tag':'6'
    });
    var endTime = new Date(Date.now()+8*3600000).toISOString().replace(/T.*/,'');
    var layerIndex = layer.open({
        type : 2,
        shadeClose: false
        ,content: '加载中...'
    });
    // new HttpRequest().getzyfylist($stateParams.inpatientid,$stateParams.startdate,endTime,function (res) {
    new HttpRequest().getzyfylist($stateParams.inpatientid,'2016-01-01',endTime,function (res) {
        layer.close(layerIndex);
        if(res.code === '000'){
            $scope.zypatdetail = JSON.parse(res.data);
            $scope.$apply();
        }
    });
});