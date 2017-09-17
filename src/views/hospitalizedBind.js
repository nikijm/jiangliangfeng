/**
 * Created by xiewl on 2017/4/14.
 */
angular.module('myApp.hospitalizedBind',['ui.router'])
    .controller('hospitalizedBindCtrl',function ($scope) {
        $$.setPageTitle('住院号绑定');
        new HttpRequest().leleyStatistics({
            'type':'load',
            'opt':'loadHosptalizationNumber',
            'tag':'12'
        });
        $scope.bindEnd = true;
        $scope.search=function () {
            if(!$scope.name || !$scope.inpatientid || !$scope.bindEnd) return false;
            $scope.bindEnd = false;
            new HttpRequest().leleyStatistics({
                'type':'button',
                'opt':'clickBindHosptalizationNumber',
                'tag':'12'
            });
            new HttpRequest().bindInPatientId({
                name : $scope.name,
                inpatientid : (+$scope.inpatientid).toString()
            },function (res) {
                $scope.bindEnd = true;
                if(res.code === '000'){
                    layer.open({
                        content: '住院号绑定成功'
                        ,skin: 'msg'
                        ,time : 1
                        ,end : function () {
                            history.go(-1);
                        }
                    });
                }else if(res.code === '3001'){
                    $scope.name = '';
                    $scope.inpatientid = '';
                }
                $scope.$apply();
            })
        }
    });