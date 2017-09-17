angular.module('myApp.sendQuery',['ui.router'])
    .controller('sendQueryCtrl',function ($scope, $stateParams,$state) {
        $$.setPageTitle('寄送确认')
        $scope.showAdd = false
        $scope.selected=false
        $scope.sendReports = {}
        $scope.saveData = {}
        $scope.sendlists = {} // 申请寄送返回数据

        // 获取地址列表
        $scope.selectAgreement=function(event){
            var _this=$(event.target);
            _this.closest('.big-box').toggleClass("boxColor");
            if($('.big-box').hasClass("boxColor")){
                $scope.selected=true
                $('.big-box').css('border', ' 0.01rem solid #00A560')
                $(".chioce").css({'border-bottom': ' 0.01rem solid #00A560','border-right': ' 0.01rem solid #00A560'})
                if($scope.datas.length > 0 && $scope.selected) {
                    $(".btn button").css("background-color", "#00A560");
                    $(".btn button").attr("disabled", false);
                }  else {
                   return false
               }
           } else {
               $scope.selected=false
               $(".btn button").css("background-color", "#cccccc");
               $(".btn button").attr("disabled", true);
               $('.big-box').css('border', ' 0.01rem solid #cccccc')
               $(".chioce").css({'border-bottom': ' 0.01rem solid #cccccc','border-right': ' 0.01rem solid #cccccc'})
           }
       }
        new HttpRequest().searchMyAdressList('',function(res){
            if (res.code === '000') {
                $scope.show = true
            var arr = JSON.parse(res.data).reverse()
                setArrFirst(arr, 'isDefault', 1)
                $scope.$apply()
            }
        })

         function setArrFirst( arr, property, value) {
                var chooseIndex;    //选中元素在数组中的索引
                var areBothObj =  arr.every(function(item, index, array) { 
                    return item instanceof Object;
                });
                if (areBothObj) {
                     arr.forEach(function(item, index, array) { 
                        if (item[property] == value) {
                            chooseIndex =  index
                        }
                    });
                 } else {
                    return false;
                }
                var choosed =  arr.splice(chooseIndex, 1);  
                $scope.datas = choosed.concat(arr);
                if ( $scope.datas.length <= 0) {
                    $scope.showAdd = true;
                } else {
                    $scope.defautindex = parseInt($stateParams.id);
                    $scope.indexs = parseInt($stateParams.index);
                }
                $scope.$apply()
                if ($scope.indexs >= 1) {
                  $scope.sendReports.addressId = $scope.datas[$scope.indexs].addressId ;
              } else {
                $scope.sendReports.addressId = $scope.datas[0].addressId;
         
              }
          }
          // 邮费和服务费searchPrice
          setTimeout(function(){
             new HttpRequest().searchPrice({addressId: $scope.sendReports.addressId},function(res){
                if (res.code === "000") {
                    $scope.parice = JSON.parse(res.data)
                    $scope.$apply()
                    $scope.totalParice = $scope.parice.postage + $scope.parice.serviceCharge
                }
              })
          },1000)
        // 选择寄送的报告内容
       $scope.reportContent = JSON.parse(sessionStorage.getItem('reportDatas'))
 		   var newArr=[];
 		 $scope.reportContent.forEach(function(val){
 			var obj={};
     		obj.name=val.examName;
  			obj.inspecNo = val.inspecno;
  			obj.inputDate = val.expectReportDate;
  			obj.reportTime = val.reportDate;
  			obj.departmentName = val.deptName;
  			obj.address = val.reportAddress;
  			newArr.push(obj);
 		})
 		$scope.sendReports.reports = newArr;
 		// 申请寄送报告
 		$scope.applySend=function(){
 			new HttpRequest().searchGroupDetail($scope.sendReports,function(res){
 				if (res.code === "000") {
 					$scope.sendlists = JSON.parse(res.data);
          var nowTime =new Date();
          var ms =nowTime.getTime();
          var endms =nowTime.getTime() + 60*10*1000;
          var times =  new Date(ms).getMinutes()
          localStorage.startTime=times;
          $state.go("sendlist");
          localStorage.pagecount=2; // 用户第一次点击申请寄送进去寄送说明
 				}
        	})
 		}
        $scope.toAdressList=function(){
            sessionStorage.setItem("flag", 1)
            sessionStorage.setItem("flag-editor", 1)
            $state.go("addressselect")

        }   
        $scope.toAddress=function(){
            sessionStorage.setItem("flagAddress", 1)
            $state.go("addressadd")

        }

    })