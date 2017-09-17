/**
 * Created by lw on 2017/5/26.
 */
angular.module('myApp.docDetail',['ui.router'])
.controller('docDetailCtrl',function ($scope,$stateParams,$location) {
    $$.setPageTitle('互联网诊室');
    //显示隐藏简介
    (function () {
        if($('.abstract').text().length<150){
            $('.abstract').addClass('active');
            $('.abstract-ico').hide();
        }
        $('.abstract-ico').click(function () {
            $('.abstract').toggleClass('active');
        })
    })();

    $scope.jumpUrl = function (e) {
        var _this = e.currentTarget;
        if (isAppVisit()) {
            if ($(_this).hasClass('more-comment')) {
                location.href = $(_this).attr('data-href');
            } else if (window.app && app.getLoginStatus()) {
                TOKEN = app.getToken();
                PHONE = app.getPhone();
                $.ajax({
                    type:"OPTIONS",
                    url:"/",
                    complete:function(x){
                        var date = new Date(x.getResponseHeader("Date"));
                        var hour = date.getHours();
                        var minute = date.getMinutes();
                        if(($(_this).attr('data-type') === 'onlineclinic') && (hour < 6 || (hour === 6 && minute < 30))){
                            layer.open({
                                title: '服务时间已结束'
                                , content :'您可以在每天06:30-24:00购买在线门诊咨询'
                                , btn: ['好的']
                                ,className : 'my-alert'
                                , yes: function (index) {
                                    layer.close(index);
                                }
                            });
                        }else{
                            if ($scope.modal.onlinestate === '1' || $(_this).attr('data-type') !== 'onlineclinic') {
                                location.href = $(_this).attr('data-href');
                            }else {
                                layer.open({
                                    content: '医生当前忙碌<br>回复时间可能较长'
                                    , btn: ['确定下单', '取消']
                                    ,className : 'my-alert'
                                    , yes: function (index) {
                                        layer.close(index);
                                        location.href = $(_this).attr('data-href');
                                    }
                                });
                            }
                        }
                    }
                });
            }
        } else {
            layer.open({
                content: '下载乐乐医App可使用此功能'
                , skin: 'msg'
                , time: 5
            });
        }
        return false;
    };
    //获取互联网诊室数据
    (function () {
        var layerIndex = layer.open({
            type: 2,
            shadeClose: false
            ,content: '加载中...'
        });
        new HttpRequest().networkClinic($stateParams.rid,function (res) {
            layer.close(layerIndex);
            if(res.code === '000'){
                $scope.modal = JSON.parse(res.data);
                pageShare({title:$scope.modal.name+'医生互联网诊室',description:$scope.modal.goodat});
                window.app && app.showShareButton && app.showShareButton();
                $scope.modal.fullPhoto = baseImgUrl+$scope.modal.photo+'@120w_120h_90Q.jpg';
                $scope.modal.statusStr = $scope.modal.onlinestate === '1' && '在线' || '忙碌';
                $scope.modal.comment.comments.map(function (item) {
                    var cutLen = item.patient.length-2;
                    cutLen < 2 ? cutLen = 2 :'';
                    item.patient = item.patient.substr(0,cutLen) + '**';
                });
                $scope.$apply();
            }
        })
    })();
});