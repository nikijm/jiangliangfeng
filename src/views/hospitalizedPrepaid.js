angular.module('myApp.hospitalizedPrepaid',['ui.router'])
    .controller('hospitalizedPrepaidCtrl',function ($scope,$stateParams) {
        $$.setPageTitle('预交金缴存');
        window.prepaidpaymentOrderCallback = function (res) {
            if(res == 2){
                history.go(-2);
            }
        };
        $scope.zypatdetail = JSON.parse($stateParams.entity);
        new HttpRequest().leleyStatistics({
            'type':'load',
            'opt':'loadAdvanceChargePay',
            'tag':'7'
        });
        //预交金缴存
        $scope.submitPrepaid = function () {
            if(!$scope.price) return false;
            var modal = {
                price : $scope.price,
                inpatientid : $scope.zypatdetail.inpatientid,
                patientid : $scope.zypatdetail.patientid,
                cardno : $scope.zypatdetail.cardno
            };
            new HttpRequest().leleyStatistics({
                'type':'button',
                'opt':'pay',
                'tag':'7'
            });
            new HttpRequest().submitPrepaid(modal,function (res) {
                if(res.code === '000'){
                    var data = JSON.parse(res.data);
                    location.href = 'leley://orderpayment?rid='+ data.orderid +'&service_catalog=prepaidpayment&callback=prepaidpaymentOrderCallback';
                }
            })
        }
    });
