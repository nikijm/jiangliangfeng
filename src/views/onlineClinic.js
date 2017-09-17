angular.module('myApp.onlineClinic', ['ui.router'])
.controller('onlineClinicCtrl',function($scope,$compile) {
    $$.setPageTitle('华西第四医院');
    pageShare();
    window.app && app.showShareButton && app.showShareButton();
    //绑定首页四个科室地址
    (function () {
        for(var i = 0;i<HOME_DEPT_LIST.length;i++){
            $('.inquiry-dept-item').eq(i)
                .attr({'href':'#!/doclist/'+ HOME_DEPT_LIST[i].id +'/' + HOME_DEPT_LIST[i].name,
                    'data-id':HOME_DEPT_LIST[i].id,'data-name':HOME_DEPT_LIST[i].name})
                .find('.dept-name').text(HOME_DEPT_LIST[i].name);
        }
    })();

    if(isAppVisit() && TOKEN.length > 5){
        //在线门诊小红点
        new HttpRequest().getServiceUserOrderCount(function (res) {
            if(res.code === '000'){
                $scope.clinicNum = JSON.parse(res.data).count;
                $scope.$apply();
            }
        });
        //诊疗服务小红点
        new HttpRequest().getClinicCount(function (res) {
            if(res.code === '000'){
                $scope.clinicCount = JSON.parse(res.data).cliniccount;
                $scope.$apply();
            }
        })
    }

    //加载热门医生
    (function () {
        var modal = {
            startpageno : '0',
            num : '15',
            sorttype : 'onlineclinic'
        };
        new HttpRequest().getDoctorList(modal,function (res) {
            if(res.code == '000'){
                var html = '<doctor-list list="{{ctrlDoc}}"></doctor-list>';
                var node = $compile(html)($scope.$new());
                $('.doc-box').append(node[0]);
                var resData = JSON.parse(res.data);
                resData.map(function (index) {
                    index.photo = baseImgUrl+index.photo+'@120w_120h_90Q.jpg'
                });
                $scope.ctrlDoc = resData;
                $scope.$apply();
            }
        })
    })();

    //回到主页
    $scope.goToHome = function (e) {
        var _this = $(e.target);
        if(!_this.hasClass('item')) _this = _this.parents('.item');
        var url = _this.attr('data-href');
        location.replace(url);
    };
});
