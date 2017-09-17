/**
 * Created by lw on 2017/3/17.
 */
angular.module('myApp.hosIntroduce',['ui.router'])
.controller('hosIntroduceCtrl',function ($scope) {
    $$.setPageTitle('医院介绍');
    pageShare({title:'医院介绍',description:$('.list').eq(0).text().trim().substr(0,50)});
    window.app && app.showShareButton && app.showShareButton();
});