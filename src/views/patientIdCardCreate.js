/**
 * Created by zengy on 2017/3/22.
 */
angular.module('myApp.patientIdCardCreate',['ui.router'])
    .controller('patientIdCardCreateCtrl',function ($scope,$stateParams) {
        $$.setPageTitle('基本信息注册');
        new HttpRequest().leleyStatistics({
            'type':'load',
            'opt':'loadAddMedicalCard',
            'tag':'9'
        });
        //绑定跳转档案列表链接
        $('.select-record').attr('href','leley://selectrecord?callback=recordDataFunc');
        window.recordDataFunc = function (data) {
            if(typeof data === 'string'){
                data = JSON.parse(data);
            }
            $(function () {
                $scope.patientid = data.rid || '';
                $scope.name = data.name || '';
                $('#nation').mobiscroll('setVal',(data.nation || ''),true);
                $scope.idcard = data.idcard || '';
                $('#sex').mobiscroll('setVal',(data.sex || ''),true);
                $('#birthday').mobiscroll('setVal',(data.birthday || ''),true);
                $scope.address = data.address || '';
                $scope.phone = data.phone || '';
                $scope.$apply();
            });
        };
        //绑定选择框数据
        (function () {
            // 民族
            setTimeout(function () {
                $scope.nationList = nationList;
                $scope.$apply();
                window.nationSelect = $('#nation').mobiscroll().select({
                    theme: 'ios',
                    lang: 'zh',
                    display : 'bottom'
                });
            },0);
            // 性别
            $('#sex').mobiscroll().select({
                theme: 'ios',
                lang: 'zh',
                display : 'bottom'
            });
            //出生日期
            $('#birthday').mobiscroll().date({
                theme: 'ios',
                lang: 'zh',
                display : 'bottom',
                dateFormat : 'yy-mm-dd',
                max: new Date()
            });
            //职业
            $('#job').mobiscroll().select({
                theme: 'ios',
                lang: 'zh',
                display : 'bottom'
            });
            //与患者关系
            $('#relation').mobiscroll().select({
                theme: 'ios',
                lang: 'zh',
                display : 'bottom'
            });
        })();
        //提交数据
        $scope.submitInfo = function () {
            // 输入项验证
            if(!$scope.name){
                layer.open({
                    content: '姓名不能为空'
                    ,skin: 'msg'
                    ,time : 3
                });
                return false;
            }
            if(!$scope.idcard){
                layer.open({
                    content: '身份证号码不能为空'
                    ,skin: 'msg'
                    ,time : 3
                });
                return false;
            }else if($scope.idcard.length !== 18){
                layer.open({
                    content: '请输入正确的身份证号码'
                    ,skin: 'msg'
                    ,time : 3
                });
                return false;
            }
            if(!$('#birthday').val()){
                layer.open({
                    content: '出生日期不能为空'
                    ,skin: 'msg'
                    ,time : 3
                });
                return false;
            }
            if(!$scope.address){
                layer.open({
                    content: '居住地址不能为空'
                    ,skin: 'msg'
                    ,time : 3
                });
                return false;
            }
            if(!$scope.phone){
                layer.open({
                    content: '手机号码不能为空'
                    ,skin: 'msg'
                    ,time : 3
                });
                return false;
            }
            if(!$scope.contact){
                layer.open({
                    content: '联系人不能为空'
                    ,skin: 'msg'
                    ,time : 3
                });
                return false;
            }
            //提交数据
            if($('#submitInfo').hasClass('disabled')){
                return false;
            }
            new HttpRequest().leleyStatistics({
                'type':'button',
                'opt':'addMedicalCardSubmit',
                'tag':'9'
            });
            $('#submitInfo').addClass('disabled').text('提交中');
            new HttpRequest().createPatientIdCard({
                "patientid":$scope.patientid,
                "name":$scope.name,
                "idcard":$scope.idcard,
                "nation": $('#nation').val(),
                "phone": $scope.phone,
                "address":$scope.address,
                "sex":$('#sex').val(),
                "birthday":$('#birthday').val(),
                'profession' : $('#job').val(),
                'contact' : $scope.contact,
                'relation' : $('#relation').val()
            },function (res) {
                $('#submitInfo').removeClass('disabled').text('提交');
                if(res.code === '000'){
                    layer.open({
                        content: '添加成功！'
                        ,skin: 'msg'
                        ,time : 1
                        ,end : function () {
                            history.go(-1);
                            // location.replace('#!/patientidcardlist/'+$stateParams.type);
                        }
                    });
                }
            });
        };
        $scope.writeBirthday = function (e) {
            var _this = $(e.target);
            if(!$('#birthday').val().trim()){
                var date = _this.val();
                if(date.length === 18){
                    var dateStr = date.substr(6,4) + '-' + date.substr(10,2) + '-'+ date.substr(12,2);
                    $('#birthday').mobiscroll('setVal',dateStr,true);
                }
            }
        }
    });