/**
 * Created by lw on 2017-5-26.
 */
angular.module('myApp.search',['ui.router'])
    .controller('searchCtrl',function ($scope,$compile,$stateParams) {
        $$.setPageTitle('搜索');
        //搜索医生事件
        $scope.searchDoctor = function (index) {
            if(!$scope.searchCode){
                layer.open({
                    content:'请输入关键词',
                    skin:'msg',
                    time:2
                });
                return false;
            }
            var modal = {
                "type":"5",
                "keyWord":$scope.searchCode,
                "hospId":HOSPITALID,
                "pageSize":index || 10,
                "pageNo":1,
                "sort":"grade",
                "order":"desc"
            };
            $scope.ctrlDoc = [];
            $('#searchBox').blur();
            var layerIndex = layer.open({
                type: 2,
                shadeClose: false
                ,content: '搜索中...'
            });
            $('.doc-box').html('');
            new HttpRequest().searchDoctor(modal,function (res) {
                layer.close(layerIndex);
                var resData = JSON.parse(res.data).nethospitaldoctor;
                if(res.code === '000'){
                    if(resData.length>0){
                        var html = '<doctor-list list="{{ctrlDoc}}" id="docList"></doctor-list>';
                        var node = $compile(html)($scope.$new());
                        $('.doc-box').append(node[0]);
                        resData.map(function(index){
                            index.rid = index.doctorId;
                            index.photo = baseImgUrl + index.photo+'@120w_120h_90Q.jpg';
                            index.onlinestate = index.onlineState;
                            index.name = index.userName;
                        });
                        $scope.ctrlDoc = resData;
                        $scope.$apply();
                    }else {
                        var html = '<div id="loadingFail">'+
                            '<img src="./image/loading-fail.png" alt="">'+
                            '<p style="font-size: .2rem;margin-bottom: .16rem;color: #666">无搜索结果</p><p style="font-size: .16rem;color: #999;">可以换一个搜索内容试试哦</p>'+
                            '</div>';
                        $('.doc-box').html(html);
                    }
                }
            });
        };


        //判断传进来关键字
        if($stateParams.code){
            $('#searchForm').hide();
            $scope.searchCode = decodeURIComponent($stateParams.code);
            $scope.searchDoctor(99);
        }else {
            setTimeout(function () {
                $('#searchBox').focus();
            },100)
        }
        //end
        $scope.change = function (e) {
            var keyCode = window.event?e.keyCode:e.which;
            //判断回车事件
            if(keyCode == 13){
                $scope.searchDoctor();
            }
            //判断是否有删除
            if($scope.searchCode){
                $('#delete').css('display','inline-block');
            }else {
                $('#delete').css('display','none');
            }
        };

        $scope.delete = function () {//清除查询
            $scope.searchCode = '';
            if(!$scope.ctrlDoc.length){
                $('.doc-box').html('');
            }
            $('#searchBox').focus();
            $('#delete').css('display','none')
        };
    });