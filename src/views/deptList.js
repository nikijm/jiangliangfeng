angular.module('myApp.deptList', ['ui.router'])
.controller('deptListCtrl',function($scope,$stateParams) {
    $$.setPageTitle('科室选择');
    $scope.jumpUrl = $stateParams.url;
    new HttpRequest().getDeptList(function (res) {
        if(res.code === '000'){
            $scope.deptList = JSON.parse(res.data);
            if($stateParams.parentId && $stateParams.parentId != '0'){
                for(var item in $scope.deptList){
                    if($scope.deptList[item].rid == $stateParams.parentId){
                        $scope.deptChildrenList = $scope.deptList[item].children;
                        $scope.parentId = $stateParams.parentId;
                        $scope.parentIndex = item;
                    }
                }
            }else{
                $scope.deptChildrenList = $scope.deptList[0].children;
                $scope.parentId = $scope.deptList[0].rid;
                $scope.parentIndex = 0;
            }
            $scope.$apply();
            setTimeout(function () {
                $('.left-box').animate({scrollTop: $('.left-box .active').offset().top},0);
                $('.content').addClass('show');
            },300);
        }
    });
    //选择一级标签
    $scope.selectDept = function (target) {
        var _this = $(target);
        $scope.parentId = $(target).attr('data-rid');
        $scope.deptChildrenList = JSON.parse(_this.attr('child'));
        $scope.$apply();
        _this.addClass('active').siblings().removeClass('active');
    }
});