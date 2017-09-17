/**
 * Created by zengy on 2017/7/24.
 */
angular.module('myApp.addressSelect',['ui.router'])
    .controller('addressSelectCtrl',function ($state,$scope) {
    // 获取列表
        $scope.addressId=localStorage.addressSelected || '';
        $scope.show = false
        new HttpRequest().searchMyAdressList('',function(res){
            if (res.code === '000') {
                $scope.show = true
                console.log('s', res.data)
            var arr = JSON.parse(res.data).reverse()
            if(sessionStorage.getItem('flagAdd')) {
                $scope.datas=arr
                $scope.datas[0].isDefault = 1
                for (var i=1;i<$scope.datas.length;i++) {
                    $scope.datas[i].isDefault = 0
                    sessionStorage.removeItem('flagAdd')
                }
                 $scope.$apply()
            } else { setArrFirst(arr, 'isDefault', 1)
                $scope.$apply() }
            }
        })
         function setArrFirst( arr, property, value) {
                var chooseIndex;   //选中元素在数组中的索引
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

        }
        // 修改收货地址
        $scope.toProducer=function (item) {
            $state.go('addressadd', {addressId: item.addressId,name:item.name,phone:item.phone,
            idNo:item.idNo,province:item.province,city:item.city,area:item.area,detail:item.detail});
        }
        $scope.selectAddress=function(item,event,n) {
            var _this=$(event.target);
            _this.closest('.address-item').toggleClass("selected");
            localStorage.addressSelected=n.addressId;
            $state.go("sendquery", {index: item})
        }
    })

