/**
 * Created by zengy on 2017/3/22.
 */
angular.module('myApp.patientIdCardBind',['ui.router'])
    .controller('patientIdCardBindCtrl',function ($scope,$stateParams) {
        $$.setPageTitle('绑定就诊卡');
        new HttpRequest().leleyStatistics({
            'type':'load',
            'opt':'loadBindMedicalCard',
            'tag':'10'
        });
        $scope.patientCardBand=function () {
            if(!$scope.name || !$scope.cardno) return false;

             new HttpRequest().addMedicalCardBand({
                 name:$scope.name,
                 cardno:$scope.cardno
             },function (res) {
                 if(res.code === '000'){
                     layer.open({
                         content: '绑定成功！'
                         ,skin: 'msg'
                         ,time : 1
                         ,end : function () {
                             location.replace('#!/patientidcardlist/'+$stateParams.type);
                         }
                     });
                 }
             })
        }
    });