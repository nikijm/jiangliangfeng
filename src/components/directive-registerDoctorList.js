angular.module('myApp.directive-registerDoctorList',[])
  .directive('registerDoc',function () {
    return {
        restrict:"AE",
        replace:true,
        templateUrl:'components/directive-registerDoctorList.html?_=' + new Date().getMinutes(),
        link:function (scope, element, attrs) {
            scope.list = [];
            if(attrs.list){
                scope.list = JSON.parse(attrs.list);
                scope.list.map(function (index) {//url转下码
                    index.fullPhotoUrl = baseImgUrl + index.photo+'@120w_120h_90Q.jpg';
                    index.allEncode = encodeURIComponent(JSON.stringify(index));
                })
            }
            //前往挂号
            scope.registerBtnMapping= function (e) {
                var _this = $(e.target);
                if(!_this.hasClass('directive-doc-item')) _this = $(e.target).parents('.directive-doc-item');
                var type = _this.find('.register.list').attr('data-type');
                var href = _this.find('.register.list').attr('data-href');
                if($(e.target).hasClass('confirm')){
                    type = _this.find('.register.confirm').attr('data-type');
                    href = _this.find('.register.confirm').attr('data-href');
                }
                !_this.find('.register.full').length && scope.leleyStatistics({type:'button','opt':type,'tag':'3'});
                location.href = href;
            }
        }
    }
});