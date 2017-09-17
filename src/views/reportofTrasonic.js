angular.module('myApp.reportOfTrasonic',['ui.router'])
    .controller('reportOfTrasonicCtrl',function ($scope,$stateParams) {
        $$.setPageTitle('超聲报告明细');
        // var layerIndex = layer.open({
        //     type : 2,
        //     shadeClose: false
        //     ,content: '加载中...'
        // });
        console.log('ss', $stateParams)
        // new HttpRequest().gettrasonicReportDetail({
        //     "OID":$stateParams.OID.toString()
        // },function (res) {
            
        // })
    });