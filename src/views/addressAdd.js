/**
 * Created by zengy on 2017/7/26.
 */
angular.module('myApp.addressAdd',['ui.router'])
    .controller('addressAddCtrl',function ($scope,$stateParams,$state) {
        $scope.show = false;
        $scope.showSumit = false;
         $scope.modalShow = false;
        $scope.addressModel = {}
        // 编辑收货地址回显数据
        if ($stateParams.addressId) {
            $scope.show = true;
            $scope.addressModel.name = $stateParams.name
            $scope.addressModel.phone = $stateParams.phone
            $scope.addressModel.idNo = $stateParams.idNo
            $scope.addressModel.detail = $stateParams.detail
        }
        var html='',secondHtml,thirdHtml;
        for(var first in addressDataNew[0].childrens){
            // if(!addressDataNew.hasOwnProperty(first)) continue;
            secondHtml = '';
            for(var second in addressDataNew[0].childrens[first].childrens){
                // if(!addressDataNew[first].hasOwnProperty(second)) continue;
                thirdHtml = '';
                for(var third in addressDataNew[0].childrens[first].childrens[second].childrens){
                    // if(!addressDataNew[first][second].hasOwnProperty(third)) continue;
                    var data = addressDataNew[0].childrens[first].childrens[second].childrens[third]
                    thirdHtml += '<li data-areaId="'+data.rowid+'" data-val="'+ data.name +'" >'+ data.name +'</li>';
                }
                secondHtml += [
                    '<li data-cityId="'+ addressDataNew[0].childrens[first].childrens[second].rowid+'"data-val="'+ addressDataNew[0].childrens[first].childrens[second].name +'">'+addressDataNew[0].childrens[first].childrens[second].name,
                        '<ul class="area">',
                            thirdHtml,
                        '</ul>',
                    '</li>'
                ].join('')
            }
            html += [
                '<li data-provinceId="'+addressDataNew[0].childrens[first].rowid+'" data-val="'+ addressDataNew[0].childrens[first].name +'">'+addressDataNew[0].childrens[first].name,
                    '<ul class="province">',
                        secondHtml,
                    '</ul>',
                '</li>'
            ].join('');
        }
        $('#address').append(html).mobiscroll().treelist({
            theme: 'ios',
            lang:'zh',
            display: 'bottom',
            placeholder: '请选择',
            width: [76, 116, 116],
            onSet:function (event, inst) {
                $("#address_dummy").val(event.valueText.replace(/\s*/g,""));
                // 获取省 城 地区id
                var selectedDate = inst.getVal(); 
                var arr = selectedDate.split(" ");
               $('#address > li').each(function(i){
                      if($(this).attr('data-val')==arr[0]){
                        $scope.addressModel.provinceId = $(this).attr('data-provinceid')
                      } 
                })
               $('.province > li').each(function(i){
                      if($(this).attr('data-val')==arr[1]){
                        $scope.addressModel.cityId = $(this).attr('data-cityid')
                      } 
                })
               $('.area > li').each(function(i){
                      if($(this).attr('data-val')==arr[2]){
                        $scope.addressModel.areaId = $(this).attr('data-areaid')
                      } 
                })
           }
        })
        // 编辑收货地址回显地区
          $("#address_dummy").val($stateParams.province + '' + $stateParams.city + $stateParams.area)
       // $("#address_dummy").val('四川省 成都市 高新区')
        $scope.isCommit=false;
        $scope.submit=function () {
          if(!$scope.addressModel.name){
              layer.open({
                  content: '请填写收货人'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
              });
              $scope.isCommit=false;
              return false
          }else if(!(/[\u4e00-\u9fa5]/g.test($scope.addressModel.name))){
              layer.open({
                  content: '姓名只能输入中文'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
              });
              $scope.isCommit=false;
              return false
          }
          if(!$scope.addressModel.idNo){
              layer.open({
                  content: '请填写身份证号码'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
              });
              $scope.isCommit=false;
              return false;
          }else if($scope.addressModel.idNo.length!=15 && $scope.addressModel.idNo.length!=18){
              layer.open({
                  content: '身份证只能输入15位或18位'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
              });
              $scope.isCommit=false;
              return false;
          }else if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/i.test($scope.addressModel.idNo))) {
              layer.open({
                  content: '身份证号码不符合规定'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
              });
              $scope.isCommit=false;
              return false;
          }
          if(!$scope.addressModel.phone){

              layer.open({
                  content: '请填写联系电话'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
              });
              return false
          }else if(!(/^1[34578]\d{9}$/.test($scope.addressModel.phone))){
              layer.open({
                  content: '电话号码不符合规定'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
              });
              $scope.isCommit=false;
              return false;
          }
          if(!$("#address_dummy").val()){
              layer.open({
                  content: '请填写地区'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
              });
              $scope.isCommit=false;
              return false
          }
          if(!$scope.addressModel.detail){
              layer.open({
                  content: '请填写详细地址'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
              });
              $scope.isCommit=false;
              return false
          }else if($scope.addressModel.detail.length<5){
              layer.open({
                  content: '详细地址必须大于5位'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
              });
              $scope.isCommit=false;
              return false
          }
          if($stateParams.addressId) {
            // 编辑
            $scope.addressModel.addressId = $stateParams.addressId;
            $scope.addressModel.idNo= $('.id-card').val();
            new HttpRequest().editorDeliveryAddress($scope.addressModel, function(res) {
              if (res.code === '000') {
                 layer.open({
                  content: '保存成功'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
                });
                setTimeout(function() {
                  if (sessionStorage.getItem("flag-editor")) {
                    $state.go('addressselect');
                  } else {
                    $state.go('addresslist');
                  }
               },2000)
              } else {
                layer.open({
                  content: '保存失败'
                  ,skin: 'msg'
                  ,time: 2 //2秒后自动关闭
                });
              }
              // sessionStorage.removeItem("flag-editor")

            })
          } else {
            // 新增
            console.log($scope.addressModel.idNo)
            new HttpRequest().addNewDeliveryAddress($scope.addressModel, function(res) {
              if (res.code === '000') {
                sessionStorage.setItem("flagAdd", 2) //确认寄送选择收货地址单跳转
                if (sessionStorage.getItem("flagAddress")) {
                    $state.go('sendquery', {id: 0});
                  } else {
                    $state.go('addresslist');
                  }
              } 
           })
          }
        }
        $scope.deleteAddress=function (event) {
          $scope.modalShow = true;
        }
        $scope.conform=function () {
            new HttpRequest().deleteDeliveryAddress({'addressId':$stateParams.addressId},function(res) {
              if (res.code === '000') {
               if (sessionStorage.getItem("flag")) {
                    $scope.modalShow = false;
                    $state.go('addressselect');
                  } else {
                     $scope.modalShow = false;
                    $state.go('addresslist');
                  }
                }
            })
        }
      }).filter('Idcard', function() { //可以注入依赖
          return function(text) {
            console.log(text)
            if (text.length == 18 ) {
              return text.substring(0,3)+"************"+text.substring(15,18);
            } else {
              return text.substring(0,3)+"*********"+text.substring(12,15);
            }
        }
    });