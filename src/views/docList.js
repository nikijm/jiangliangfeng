/**
 * Created by lw on 2017/3/17.
 */
angular.module('myApp.docList',['ui.router'])
.controller('docListCtrl',function ($scope,$stateParams,$compile,$state) {
    $$.setPageTitle('医生列表');
    $scope.parentId = $stateParams.parentId;
    //按钮操作
    $scope.sortSelect = function () {//排序选择按钮
        $('.select-box').toggle();
        $('body').toggleClass('hide')
    };
    //点击空白关闭
    $scope.closeSort = function () {
        $('.select-box').toggle();
        $('body').toggleClass('hide')
    };
    //点开排序禁止滑动
    $('.select-box').on('touchend',function (e) {
        e.stopPropagation();//阻止冒泡，防止滑动。
    });
    //更新科室名字
    $('.left span').text($stateParams.deptName);
    //获取医生列表
    $scope.docModal={};
    $scope.docModal.startpageno = 0;
    $scope.docModal.num = 15;
    $scope.isScrol = true;
    $scope.ctrlDoc = [];
    var noDoctorList = false;
    if($stateParams.deptId == 0){
        $scope.docModal.deptid = '';
    }else {
        $scope.docModal.deptid = $stateParams.deptId;
    }
    $scope.docList = function (ajax) {
        var layerIndex;
        if(!ajax){
            layerIndex = layer.open({
                type: 2,
                shadeClose: false
                ,content: '加载中...'
            });
            $scope.ctrlDoc = [];
        }
        new HttpRequest().getDoctorList($scope.docModal,function (res) {
            layer.close(layerIndex);
            if(res.code === '000'){
                $('#docList').remove();
                $('#loading').remove();
                var resData = JSON.parse(res.data);
                if(resData.length == 0 && $scope.docModal.startpageno == 0){
                    noDoctorList = true;
                    $('.doc-box').html('<p style="font-size: .16rem; text-align: center; color: #999; margin-top: 1.5rem;">科室逐步开放中</p>');
                    return false;
                }
                var html = '<doctor-list list="{{ctrlDoc}}" id="docList"></doctor-list>';
                var node = $compile(html)($scope.$new());
                $('.doc-box').append(node[0]);
                resData.map(function (index) {
                    index.photo = baseImgUrl+index.photo+'@120w_120h_90Q.jpg'
                });
                $scope.ctrlDoc =$scope.ctrlDoc.concat(resData);
                if(resData.length < $scope.docModal.num){
                    $scope.isScrol = false;
                }else {
                    $scope.isScrol = true;
                }
                $scope.$apply();
            }else {
                $scope.docModal.startpageno --;//错误时页码回减
                if($scope.docModal.startpageno<0)$scope.docModal.startpageno=0;
                $('#loading').remove();
            }
        })
    };
    $scope.docList();
    $scope.sortType = function (event) {//排序选择
        $('body').toggleClass('hide');
        var sort = $(event.target).attr('data-sorttype');
        $scope.docModal.startpageno = 0;
        $scope.docModal.sorttype = sort;
        $scope.docList();
        $('.select-box').toggle();
        $('.right span').text($(event.target).text());
    };
    //上拉数据加载更多；
    $scope.loadMore = function () {
        if(noDoctorList) return false;
        var startX,startY,endX,endY,X,Y;
        $('#moreDoc').on('touchstart',function (e) {
            // e.preventDefault();
            startX = e.originalEvent.changedTouches[0].pageX;
            startY = e.originalEvent.changedTouches[0].pageY;
        });
        $('#moreDoc').on('touchend',function (e) {
            // e.preventDefault();
            endX = e.originalEvent.changedTouches[0].pageX;
            endY = e.originalEvent.changedTouches[0].pageY;
            X = endX - startX;
            Y = endY - startY;
            if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
                // alert("left 2 right");
            }
            else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
                // alert("right 2 left");
            }
            else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
                // alert("top 2 bottom");
            }
            else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
                    var bodyHeight = $(document).height();//页面文档高度
                    var scrolTop = $(window).scrollTop();//滚动条高度
                    var windowHeight = $(window).height();//浏览器高度
                    var totalHeight = parseFloat(windowHeight)+parseFloat(scrolTop);
                    if((bodyHeight-200) <= totalHeight){
                        if($scope.isScrol == true){
                            var html = '<div style="font-size: 12px;width: 100%;text-align: center;height: 50px;line-height: 50px;color: #666" id="loading">加载中...</div>';
                            var ele = document.getElementById('loading');
                            if(!ele){
                                $('body').append(html);
                            }
                            $(window).scrollTop(scrolTop+50);
                            $('#moreDoc').off('touchstart');
                            $('#moreDoc').off('touchend');
                            setTimeout(function () {
                                $scope.docModal.startpageno ++;
                                $scope.docList(true);
                                $scope.loadMore();
                            },500);
                        }else {
                            layer.open({
                                content:'没有更多的数据了',
                                skin:'msg',
                                time:1
                            })
                        }
                    }
            }
        })
    };
    $scope.loadMore();


});