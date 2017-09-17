/**
 * Created by xiewl on 2017/3/16.
 */
angular.module('myApp.directive-doctorList',[])
.directive('doctorList',function() {
    return {
        restrict:"AE",
        templateUrl:'components/directive-doctorList.html?_=' + new Date().getMinutes(),
         link:function (scope, element, attrs) {
             scope.list = [];
             if(attrs.list) scope.list = JSON.parse(attrs.list);
        }
    }
});
