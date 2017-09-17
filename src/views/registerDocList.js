angular.module('myApp.registerDocList',['ui.router'])
.controller('registerDocListCtrl',function ($scope,$stateParams,$compile) {
    $$.setPageTitle($stateParams.deptName);
    //获取时间选择
    (function () {
        var nowTime = new Date();
        var weekArr = ['周日','周一','周二','周三','周四','周五','周六'];
        var timeArr = [];
        for(var i =0;i<7;i++){//循环2周日期数据
            if(i>0){
                nowTime = nowTime.valueOf()+1000*60*60*24;
                nowTime = new Date(nowTime);
            }
            var year = nowTime.getFullYear();
            var month = (nowTime.getMonth()+1<10?'0'+(nowTime.getMonth()+1):nowTime.getMonth()+1);
            var date = (nowTime.getDate()<10?'0'+nowTime.getDate():nowTime.getDate());
            var day = nowTime.getDay();
            var week = weekArr[day];
            timeArr.push({week:week,year:year,month:month,date:date});
        }
        var html='';
        var len = timeArr.length;
        var totalWidth = 0.57*len;
        $('.inner-box').css('width',totalWidth+'rem');
        for(var i =0;i<len;i++){//渲染进页面
            if(i == 0){
                timeArr[i].week = '今日';
            }
             html += '<span data-date="'+timeArr[i].year+'-'+timeArr[i].month+'-'+timeArr[i].date+'" onclick="angular.element(this).scope().getOnedayDocList(event.target)"><p>'+timeArr[i].week+'</p><p>'+timeArr[i].month+'/'+timeArr[i].date+'</p></span>';
        }
        $('.inner-box').html(html);
    })();
    //时间选择默认点击事件
    $('.inner-box').on('click','span',function () {
        $(this).css({'backgroundColor':'#00A560','color':'white'}).siblings().css({'backgroundColor':'white','color':'#666'});
    });
    //选择切换
    $('.header>div').click(function () {
        $(this).find('span').addClass('active');
        $(this).siblings().find('span').removeClass('active');
        $('.doc-box').html('');
        if($(this).hasClass('right')){
            $('.time-box').css('display','block');
            $('.inner-box span:first-child').click();//查找时间段医生列表
        }else{
            $('.time-box').css('display','none');
            $scope.registerDocList();//按专家选择
        }
    });
    //获取专家医生列表
    $scope.registerDocModal = {};
    $scope.registerDocModal.deptId = $stateParams.deptId;
    $scope.registerDocList = function () {
        var layerIndex = layer.open({
            type : 2,
            shadeClose: false
            ,content: '加载中...'
        });
        new HttpRequest().getregDoctList($scope.registerDocModal.deptId,function (res) {
            layer.close(layerIndex);
            if(res.code === '000'){
                $('#docList').remove();
                var html = '<register-doc list="{{ctrlDoc}}" id="docList"></register-doc>';
                var node = $compile(html)($scope.$new());
                $('.doc-box').append(node[0]);
                var resData = JSON.parse(res.data).item;
                resData.map(function (index) {
                    index.hospitalId = HOSPITALID;
                });
                $scope.ctrlDoc = resData;
                $scope.$apply();
            }
        })
    };
    $scope.registerDocList();

    //获取时间段医生列表
    $scope.getOnedayDocList = function (event) {
        var layerIndex = layer.open({
            type:2,
            shadeClose: false
            ,content: '加载中...'
        });
        var date;
        if(event.tagName == 'SPAN'){
            date = $(event).attr('data-date');
        }else {
            date = $(event).parent('span').attr('data-date');
        }
        new HttpRequest().getonedayregdoctlist($scope.registerDocModal.deptId,date,function (res) {
            layer.close(layerIndex);
            if(res.code == '000'){
                $('#docList').remove();
                var html = '<register-doc list="{{ctrlDoc}}" id="docList"></register-doc>';
                var node = $compile(html)($scope.$new());
                $('.doc-box').append(node[0]);
                var resData = JSON.parse(res.data).item;
                resData.map(function (index) {
                    index.hospitalId = HOSPITALID;
                    index.date = date;
                });
                $scope.ctrlDoc = resData;
                $scope.$apply();
            }
        });
    };
});