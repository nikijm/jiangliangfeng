angular.module('myApp.registerDeptList',['ui.router'])
    .controller('registerDeptListCtrl',function ($scope,$stateParams) {
        $scope.jumpUrl = $stateParams.jumpUrl;
        if($scope.jumpUrl === 'registerdoclist'){
            $$.setPageTitle('华西第四医院挂号');
            new HttpRequest().getRegisterDeptList(function (res) {
                if(res.code === '000'){
                    $scope.list = JSON.parse(res.data).item;
                    $scope.$apply();
                }
            });
        }else if($scope.jumpUrl === 'deptintroduce'){
            $$.setPageTitle('特色科室介绍');
            $scope.list = [
                {deptname:'麻醉科',deptid:'0'},
                {deptname:'ICU',deptid:'0'},
                {deptname:'耳鼻喉科(睡眠医学科)',deptid:'0'},
                {deptname:'针灸康复科',deptid:'0'},
                {deptname:'皮肤科',deptid:'0'},
                {deptname:'妇科',deptid:'0'},
                {deptname:'眼科',deptid:'0'},
                {deptname:'姑息关怀科',deptid:'0'},
                {deptname:'肿瘤科',deptid:'0'},
                {deptname:'职业病科',deptid:'0'},
                {deptname:'骨质疏松科',deptid:'0'},
                {deptname:'急诊科',deptid:'0'},
                {deptname:'老年科',deptid:'0'},
                {deptname:'药剂科',deptid:'0'},
                {deptname:'检验科',deptid:'0'},
                {deptname:'放射科',deptid:'0'},
                {deptname:'超声室',deptid:'0'},
                {deptname:'高压氧治疗中心',deptid:'0'},
                {deptname:'外科',deptid:'0'}
            ];
        }else if($scope.jumpUrl === 'doclist'){
            $$.setPageTitle('科室选择');
            $scope.list = [
                {deptname:'耳鼻喉科(睡眠医学科)',deptid:'133'},
                {deptname:'妇科',deptid:'47'},
                {deptname:'急诊科',deptid:'140'},
                {deptname:'康复科',deptid:'308'},
                {deptname:'泌尿生殖男科',deptid:'202'},
                {deptname:'骨质疏松科',deptid:'168'},
                {deptname:'肿瘤科',deptid:'140'},
                {deptname:'职业病科',deptid:'172'},
                {deptname:'姑息关怀科',deptid:'170'},
                {deptname:'老年科',deptid:'95'},
                {deptname:'皮肤科',deptid:'138'},
                {deptname:'外科',deptid:'126'},
                {deptname:'消化专科',deptid:'24'},
                {deptname:'眼科',deptid:'132'}
            ];
        }
    });











