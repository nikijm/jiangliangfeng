angular.module('myApp', [
  'ui.router',
  'myApp.directive-doctorList',
  'myApp.directive-registerDoctorList',
  'myApp.home',
  'myApp.onlineClinic',
  'myApp.deptList',
  'myApp.hosIntroduce',
  'myApp.deptIntroduce',
  'myApp.docList',
  'myApp.docDetail',
  'myApp.hospitalizedList',
  'myApp.hospitalizedDetail',
  'myApp.docList',
  'myApp.hospitalizedOrder',
  'myApp.hospitalizedBind',
  'myApp.hospitalizedPrepaid',
  'myApp.registerDocList',
  'myApp.registerDeptList',
  'myApp.reportList',
  'myApp.reportDetail',
  'myApp.reportOfCT',
  'myApp.reportOfTrasonic',
  'myApp.payList',
  'myApp.payDetails',
  'myApp.patientIdCardBind',
  'myApp.patientIdCardCreate',
  'myApp.patientIdCardList',
  'myApp.search',
  'myApp.addressAdd',
  'myApp.addressList',
  'myApp.addressSelect',
  'myApp.expressDetail',
  'myApp.sendList',
  'myApp.sendDetail',
  'myApp.sendExplain',
  'myApp.sendQuery',
  'myApp.sendSelect'

])
.config(function($stateProvider,$urlRouterProvider,$compileProvider) { //页面路由
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|leley|mailto|chrome-extension):/);
    $stateProvider
    .state({    //首页
        name : 'home',
        url:'/home',
        templateUrl:'views/home.html?_=' + new Date().getMinutes(),
        controller:'homeCtrl'
    })
    .state({    //在线门诊
        name : 'onlineclinic',
        url:'/onlineclinic',
        templateUrl:'views/onlineClinic.html?_=' + new Date().getMinutes(),
        controller:'onlineClinicCtrl'
    })
    .state({    //科室列表
        name : 'deptlist',
        url:'/deptlist/:url/:parentId',
        templateUrl:'views/deptList.html?_=' + new Date().getMinutes(),
        controller:'deptListCtrl'
    })
    .state({   //医院介绍
        name:'hosintroduce',
        url:'/hosintroduce/:hosId',
        templateUrl:'views/hosIntroduce.html?_=' + new Date().getMinutes(),
        controller:'hosIntroduceCtrl'
    })
    .state({   //科室介绍
        name:'deptintroduce',
        url:'/deptintroduce/:deptId/:deptName',
        templateUrl:'views/deptIntroduce.html?_=' + new Date().getMinutes(),
        controller:'deptIntroduceCtrl'
    })
    .state({  //医生列表
        name:'doclist',
        url:'/doclist/:deptId/:deptName',
        templateUrl:'views/docList.html?_=' + new Date().getMinutes(),
        controller:'docListCtrl'
    })
    .state({  //医生详情（互联网诊室）
        name:'docdetail',
        url:'/docdetail/:rid',
        templateUrl:'views/docDetail.html?_=' + new Date().getMinutes(),
        controller:'docDetailCtrl'
    })
    .state({  //住院信息列表
        name:'hospitalizedlist',
        url:'/hospitalizedlist',
        templateUrl:'views/hospitalizedList.html?_=' + new Date().getMinutes(),
        controller:'hospitalizedListCtrl'
    })
    .state({  //住院号查询
        name:'hospitalizedbind',
        url:'/hospitalizedbind',
        templateUrl:'views/hospitalizedBind.html?_=' + new Date().getMinutes(),
        controller:'hospitalizedBindCtrl'
    })
    .state({  //住院详情
        name:'hospitalizeddetail',
        url:'/hospitalizeddetail/:inpatientid/:name',
        templateUrl:'views/hospitalizedDetail.html?_=' + new Date().getMinutes(),
        controller:'hospitalizedDetailCtrl'
    })
    .state({//住院清单
        name:'hospitalizedorder',
        url:'/hospitalizedorder/:inpatientid/:startdate',
        templateUrl:'views/hospitalizedOrder.html?_=' + new Date().getMinutes(),
        controller:'hospitalizedOrderCtrl'
    })
    .state({//住院预缴金
        name:'hospitalizedprepaid',
        url:'/hospitalizedprepaid/:entity',
        templateUrl:'views/hospitalizedPrepaid.html?_=' + new Date().getMinutes(),
        controller:'hospitalizedPrepaidCtrl'
    })
    .state({//挂号医生列表
       name:'registerdoclist',
        url:'/registerdoclist/:deptId/:deptName',
        templateUrl:'views/registerDocList.html?_=' + new Date().getMinutes(),
        controller:'registerDocListCtrl'
    })
    .state({//挂号科室列表
        name:'registerdeptlist',
        url:'/registerdeptlist/:jumpUrl',
        templateUrl:'views/registerDeptList.html?_=' + new Date().getMinutes(),
        controller:'registerDeptListCtrl'
    })
    .state({ //检查报告列表
        name:'reportlist',
        url:'/reportlist',
        templateUrl:'views/reportList.html?_=' + new Date().getMinutes(),
        controller:'reportListCtrl'
    })
    .state({//检查报告详情
        name:'reportdetail',
        url:'/reportdetail/:inspecno/:cardno/',
        templateUrl:'views/reportDetail.html?_=' + new Date().getMinutes(),
        controller:'reportDetailCtrl'
    })
    .state({//CT检查明细
        name:'reportofct',
        url:'/reportofct/:pacsPatientId/:pacsAccessionNumber/:hospitalPatientId/:registerTime/',
        templateUrl:'views/reportOfCT.html?_=' + Math.floor(new Date().getMinutes()/5),
        controller:'reportOfCTCtrl'
    })
    .state({//超聲检查明细reportoftrasonic
        name:'reportOftrasonic',
        url:'/reportOftrasonic/:OID/',
        templateUrl:'views/reportOfTrasonic.html?_=' + Math.floor(new Date().getMinutes()/5),
        controller:'reportOfTrasonicCtrl'
    })
    .state({//缴费列表
        name:'paylist',
        url:'/paylist/:index',
        templateUrl:'views/payList.html?_=' + new Date().getMinutes(),
        controller:'payListCtrl'
    })
    .state({ //缴费详情
        name:'paydetails',
        url:'/paydetails/:recipeno',
        templateUrl:'views/payDetails.html?_=' + new Date().getMinutes(),
        controller:'payDetailsCtrl'
    })
    .state({//绑定已有就诊卡（实体）
         name:'patientidcardbind',
         url:'/patientidcardbind/:type',
         templateUrl:'views/patientIdCardBind.html?_=' + new Date().getMinutes(),
         controller:'patientIdCardBindCtrl'
     })
    .state({//创建新的就诊卡（电子）
        name:'patientidcardcreate',
        url:'/patientidcardcreate/:type/:entity',
        templateUrl:'views/patientIdCardCreate.html?_=' + new Date().getMinutes(),
        controller:'patientIdCardCreateCtrl'
    })
    .state({ //我的就诊卡/选择就诊卡
        name:'patientidcardlist',
        url:'/patientidcardlist/:type',
        templateUrl:'views/patientIdCardList.html?_=' + new Date().getMinutes(),
        controller:'patientIdCardListCtrl'
    })
    .state({//搜索页面
        name:'search',
        url:'/search/:code',
        templateUrl:'views/search.html?_=' + new Date().getMinutes(),
        controller:'searchCtrl'
    })
        .state({//物流详情
            name:'expressdetail',
            url:'/expressdetail/:deliveryOrderId',
            templateUrl:'views/expressDetail.html?_=' + Math.floor(new Date().getMinutes()/5),
            controller:'expressDetailCtrl'
        })
        .state({//管理收获地址
            name:'addresslist',
            url:'/addresslist',
            templateUrl:'views/addressList.html?_=' + Math.floor(new Date().getMinutes()/5),
            controller:'addressListCtrl'
        })
        .state({//管理收获地址--新增
            name:'addressadd',
            url:'/addressadd/:addressId/:name/:phone/:idNo/:province/:city/:area/:detail',
            templateUrl:'views/addressAdd.html?_=' + Math.floor(new Date().getMinutes()/5),
            controller:'addressAddCtrl'
        })
        .state({//选择收货地址
            name:'addressselect',
            url:'/addressselect',
            templateUrl:'views/addressSelect.html?_=' + Math.floor(new Date().getMinutes()/5),
            controller:'addressSelectCtrl'
        })
        .state({ //寄送记录
            name:'sendlist',
            url:'/sendlist',
            templateUrl:'views/sendList.html?_=' + Math.floor(new Date().getMinutes()/5),
            controller:'sendListCtrl'
        })
        .state({//寄送详情
            name:'senddetail',
            url:'/senddetail/:deliveryOrderId',
            templateUrl:'views/sendDetail.html?_=' + Math.floor(new Date().getMinutes()/5),
            controller:'sendDetailCtrl'
        })
        .state({//寄送说明
            name:'sendexplain',
            url:'/sendexplain/:lists/:readOnly',
            templateUrl:'views/sendExplain.html?_=' + Math.floor(new Date().getMinutes()/5),
            controller:'sendExplainCtrl'
        })
        .state({ //寄送确认
            name:'sendquery',
            url:'/sendquery/:id/:index',
            templateUrl:'views/sendQuery.html?_=' +  Math.floor(new Date().getMinutes()/5),
            controller:'sendQueryCtrl'
        })
        .state({
            name:'sendselect',
            url:'/sendselect',
            templateUrl:'views/sendSelect.html?_=' +  Math.floor(new Date().getMinutes()/5),
            controller:'sendSelectCtrl'
        });
    $urlRouterProvider.otherwise('/home');
})
.controller('MainController',function ($scope) {
    //路由切换开始事件
    $scope.$on('$stateChangeStart', function(){
        //隐藏app右上角分享按钮
        window.app && app.hideShareButton && app.hideShareButton();
        //清除所有正在加载状态
        window.layer && layer.closeAll();
        $scope.pageClass = '';
        $scope.downloadBtnClass = '';
        //顶部进度条
        $('.weui-progress').removeClass('disabled');
        $('.weui-progress .weui-progress__inner-bar').addClass('active');
    });
    //路由切换成功事件
    $scope.$on('$stateChangeSuccess', function(){
        setTimeout(function () {
            if(!isAppVisit()) $scope.downloadBtnClass = 'show';
            $scope.pageClass = 'show';
            $scope.$apply();
        },50);
        //顶部进度条
        setTimeout(function () {
            $('.weui-progress').addClass('disabled');
            $('.weui-progress .weui-progress__inner-bar').removeClass('active');
        },650);
    });

    //监听页面统计事件
    (function () {
        $scope.leleyStatistics = function (modal) {
            new HttpRequest().leleyStatistics(modal);
        };
        //科室点击事件统计
        $('body').on('click','.inquiry-dept-item,.dept-list-box .right-box>a',function () {
            var _this = $(this);
            if(_this.find('.dept-name').text().trim() !== '更多'){
                new HttpRequest().leleyStatistics({
                    'type':'word',
                    'opt':'dept',
                    'tag':'11',
                    'extend' : JSON.stringify({
                        deptid : _this.attr('data-id')
                    })
                });
            }
        });
    })();
    //获取统计参数
    function urlParams() {
        var urlParamObj = {};
        if(location.search.split('?')[1]){
            var urlParamList = location.search.split('?')[1].split('&');
            urlParamList.map(function (a) { return urlParamObj[a.split('=')[0]] = a.split('=')[1];});
        }
        return urlParamObj;
    }
    if(urlParams().code){
        sessionStorage.countUrl = urlParams().code;
    }
    $scope.downUrl = function () {
        if(sessionStorage.countUrl){
            window.location.href = sessionStorage.countUrl;
        }else {
            window.location.href = 'http://www.leley.com/pt.html';
        }
    }

})

