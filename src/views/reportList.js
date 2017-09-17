/**
 * Created by xiewl on 2017/3/20.
 */
angular.module('myApp.reportList',['ui.router'])
    .controller('reportListCtrl',function ($scope) {
        $$.setPageTitle('门诊报告查询');
        $scope.noResult = false;
        var layerIndex = layer.open({
            type : 2,
            shadeClose: false
            ,content: '加载中...'
        });
        new HttpRequest().getReportList(function (res) {
            layer.close(layerIndex);
            if(res.code == '000'){
                $scope.list = JSON.parse(res.data).reportList;
                $scope.datas = {
                    SIGN : Date.now(),
                    REQTIME : Date.now(),
                    TOKEN : TOKEN,
                    PHONE : PHONE,
                    USERTYPE : 2,
                    baseUrl: baseUrl
                }
                console.log($scope.datas.baseUrl)
                if(!$scope.list.length){
                    $scope.noResult = true;
                    /*
                    new HttpRequest().getMedicalCard(function (res) {
                        if(res.code === '000'){
                            $scope.patientIdList = JSON.parse(res.data);
                            if(!$scope.patientIdList.length){
                                location.replace('#!/patientidcardlist/my');
                            }else {
                                $('.content').show();
                            }
                        }
                    });*/
                }
                $scope.$apply();
            }else{
                $scope.noResult = true;
            }
        })
    });