angular.module('myApp.sendExplain',['ui.router'])
    .controller('sendExplainCtrl',function ($scope, $state,$stateParams) {
        $$.setPageTitle('寄送说明')
        if( $stateParams.readOnly) {
            $(".btn button").css("display", "none")
        }
    	$scope.explain=function() {
			$state.go("sendquery") //暂时跳转senddetail
        }

    })