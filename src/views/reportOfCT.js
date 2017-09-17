/**
 * Created by xiewl on 2017/3/20.
 */
angular.module('myApp.reportOfCT',['ui.router'])
    .controller('reportOfCTCtrl',function ($scope,$stateParams) {
        $$.setPageTitle('报告明细');
        var layerIndex = layer.open({
            type : 2,
            shadeClose: false
            ,content: '加载中...'
        });
        new HttpRequest().getCTReportDetail({
            "nthospitalid":HOSPITALID,
            "pacsPatientId":$stateParams.pacsPatientId.toString(),
            "pacsAccessionNumber":$stateParams.pacsAccessionNumber.toString(),
            "hospitalPatientId":$stateParams.hospitalPatientId.toString()
        },function (res) {
            layer.close(layerIndex);
            if(res.code === '000'){
                var resData = JSON.parse(res.data);
                $scope.detail = resData;
                // $scope.examName=$stateParams.examName
                // $scope.name=$stateParams.name
                 $scope.registerTime=$stateParams.registerTime
                // $scope.expectReportDate=$stateParams.expectReportDate;
                if(resData.patientinfos.length){
                    $scope.item = resData.patientinfos[0].reportinfo;
                    $scope.item.address=$scope.item.address.split(',');
                }
                $scope.$apply();
            }
        })
    });