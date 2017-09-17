/**
 * Created by lw on 2017/3/20.
 */
angular.module('myApp.payList',['ui.router'])
.controller('payListCtrl',function ($scope,$stateParams) {
    $$.setPageTitle('门诊缴费');
    //未交费
    $('.out-box').hide();
    $scope.getRecipeList = function (e) {
        if($(e.target).hasClass('active')) return false;
        $('.header>div>span').removeClass('active').parents('.header').find('.left>span').addClass('active');
        $scope.activeIndex = 0;
        $scope.recipeList = null;
        var layerIndex = layer.open({
            type : 2,
            shadeClose: false
            ,content: '加载中...'
        });
        new HttpRequest().getRecipeList({
            day : new Date(Date.now() + 8*3600000).toISOString().replace(/T.*/,'')
        },function (res) {
            layer.close(layerIndex);
            if(res.code === '000'){
                $scope.recipeList = JSON.parse(res.data);
                if (!$scope.recipeList.length){
                    new HttpRequest().getMedicalCard(function (res) {//判断有无就诊卡
                        if(res.code === '000'){
                            $scope.patientIdList = JSON.parse(res.data);
                            if(!$scope.patientIdList.length){
                                location.replace('#!/patientidcardlist/my');
                            }else {
                                $('.out-box').show();
                            }
                        }
                    });
                }else{
                    $('.out-box').show();
                }
                $scope.$apply();
            }
        });
    };
    //已交费
    $scope.getRecipePaidList = function (e) {
        if($(e.target).hasClass('active')) return false;
        $('.header>div>span').removeClass('active').parents('.header').find('.right>span').addClass('active');
        $scope.activeIndex = 1;
       $scope.recipeList = null;
        var layerIndex = layer.open({
            type : 2,
            shadeClose: false
            ,content: '加载中...'
        });
        new HttpRequest().getRecipePaidList({
            startdate : new Date(Date.now() + 8*3600000 - 90*24*3600000).toISOString().replace(/T.*/,''),
            enddate : new Date(Date.now() + 8*3600000).toISOString().replace(/T.*/,'')
        },function (res) {
            layer.close(layerIndex);
            $scope.recipeList = [];
            if(res.code === '000'){
                var list = JSON.parse(res.data);
                for(var i = 0;i<list.length;i++){
                    list[i].item.sort(function (a,b) {
                        return new Date(b.operdatetime).getTime() - new Date(a.operdatetime).getTime()
                    });
                    for(var j = 0;j < list[i].item.length;j++){
                        var lastItem = $scope.recipeList[$scope.recipeList.length-1];
                        if(lastItem && lastItem.operdatetime === list[i].item[j].operdatetime){
                            lastItem.item.push(list[i].item[j]);
                        }else{
                            $scope.recipeList.push({
                                operdatetime : list[i].item[j].operdatetime,
                                patitentname : list[i].patitentname,
                                cardno : list[i].cardno,
                                item : [list[i].item[j]]
                            })
                        }
                    }
                }
                $scope.recipeList.map(function (index) {
                    var total = 0;
                    for(var i =0,len=index.item.length;i<len;i++){
                        total += Number(index.item[i].cost);
                    }
                    index.total = total.toFixed(2);
                });
                $scope.$apply();
                $('.out-box').show();
            }
        });
    };
    if($stateParams.index == 2){
        $scope.getRecipePaidList({});
    }else{
        $scope.getRecipeList({});
    }
    //查看未缴费详情
    $scope.checkDetail = function (data) {
        localStorage.NH_recipeModal = JSON.stringify({
            recipeno : data.recipeno,
            data : data
        });
        location.href = '#!/paydetails/'+data.recipeno;
    };
});