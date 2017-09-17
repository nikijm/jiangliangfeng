angular.module('myApp.sendSelect',['ui.router'])
    .controller('sendSelectCtrl',function ($scope, $stateParams,$state) {
        $$.setPageTitle('报告查询');
        $scope.shoeBtn = false
        $scope.datas = {}
        // 获取列表
        var arr = []
        new HttpRequest().getReportList(function(res){
            if(res.code === '000') {
            	$scope.reportList = JSON.parse(res.data).reportList;
            }
            $scope.$apply()
        })
        //点击默认选中事件
        $('.report-box').on('click','.report-list',function (event) {
            $(this).find('input[type=radio]').get(0).checked = !$(this).find('input[type=radio]').get(0).checked;
        })
        
        $scope.selectBox = function(event) {
        	event.preventDefault()
        	var _this=$(event.target);
        	_this.closest('.report-list').toggleClass("active");
            if($('.report-list').hasClass("active") ) {
                $(".btn").css("background-color", "#00A560")
                $(".btn").attr("disabled", false);
            } else {
                $(".btn").css("background-color", "##CCCCCC");
                $(".btn").attr("disabled", true);
            }
        }
        $scope.commit = function () {
        	$(".report-list.active").each(function() {
        		arr.push(JSON.stringify($(this).data('detail')))
        	})
            localStorage.pagecount=2 // 用户第一次点击申请寄送进去寄送说明
            sessionStorage.setItem('reportDatas', "["+arr.join(',') + "]")
            $state.go("sendexplain")
            if (localStorage.pagecount == 2) {
                 sessionStorage.setItem('reportDatas', "["+arr.join(',') + "]")
                 $state.go('sendquery', {id:0})
            }
    
        }
    });