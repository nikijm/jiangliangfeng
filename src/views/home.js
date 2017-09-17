angular.module('myApp.home', ['ui.router'])
.controller('homeCtrl',function($scope,$compile,$location) {
    $$.setPageTitle('华西第四医院');
    pageShare();
    window.app && app.showShareButton && app.showShareButton();
    // 获取banner
    new HttpRequest().homeBanner('',function (res) {
        if(res.code === '000'){
            $scope.bannerList = JSON.parse(res.data);
            $scope.$apply();
            new Swiper('.swiper-container',{
                loop:true,
                autoplay:5000,
                speed:500
            });
        }
    });
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
                $scope.appointCount = JSON.parse(res.data).appointcount;
                $scope.payCount = JSON.parse(res.data).paycount;
                $scope.clinicCount = JSON.parse(res.data).cliniccount;
                $scope.$apply();
            }
        })
        //检查报告小红点
        new HttpRequest().getReportCount(function (res) {
            if(res.code === '000'){
                $scope.redDotNum = JSON.parse(res.data).redDotNum;

                $scope.$apply();
            }
        })
    }else{
        $('.appointment-box').hide();
    }

    //进入版块前，判断是否登录
    $scope.checkLogin = function (e) {
        var _this = $(e.target);
        if(!_this.hasClass('menu-item')) _this = _this.parents('.menu-item');
        if(isAppVisit()){
            if(window.app && app.getLoginStatus()){  //登录后才能访问首页版块
                TOKEN = app.getToken();
                PHONE = app.getPhone();
                $location.path(_this.attr('data-href'));
            }
            if(!window.app) $location.path(_this.attr('data-href'));
        }else{
            layer.open({
                content: '下载乐乐医App可使用此功能'
                ,skin: 'msg'
                ,time : 5
            });
        }
    };
    //就医攻略
    $scope.goToGuide = function (e) {
        var _this = $(e.target);
        if(!_this.hasClass('menu-item')) _this = _this.parents('.menu-item');
        var url = _this.attr('data-href');
        pageShare({url : url,title:'就医攻略'});
        location.href = url;
    };
    //在线门诊
    $scope.goToClinic = function (e) {
        var _this = $(e.target);
        if(!_this.hasClass('item')) _this = _this.parents('.item');
        var url = _this.attr('data-href');
        location.replace(url);
    };
});
