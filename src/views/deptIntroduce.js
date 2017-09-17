/**
 * Created by lw on 2017/3/17.
 */
angular.module('myApp.deptIntroduce',['ui.router'])
.controller('deptIntroduceCtrl',function ($scope,$stateParams) {
    $$.setPageTitle($stateParams.deptName);
    $scope.name=$stateParams.deptName;
    var dom = $(".list[data-name='"+$scope.name+"']");
    pageShare({title:$stateParams.deptName,description:dom.text().trim().substr(0,50)});
    window.app && app.showShareButton && app.showShareButton();
    dom.show();
});