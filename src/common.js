/**
 * Created by xiewl on 2017/3/16.
 */
//计算html标签字体大小
(function calcHtmlFontSize() {
    var width = document.body.clientWidth;
    if(width < 320) width = 320;
    else if(width > 750) width = 750;
    document.getElementsByTagName('html')[0].style.fontSize = width*100/375 + 'px';
    window.onresize = function () {
        var width = document.body.clientWidth;
        if(width < 320) width = 320;
        else if(width > 750) width = 750;
        document.getElementsByTagName('html')[0].style.fontSize = width*100/375 + 'px';
    };
})();
var $$ = {};
//更新网页Title信息
$$.setPageTitle = function(str){
    document.getElementsByTagName('title')[0].innerText = str;
    window.app && app.call("setPageTitle",str,"setPageTitleCallback");
    function setPageTitleCallback() {}
};

/*网络请求基础模块开始*/
var HOSPITALID = '619';

//预发
 var baseUrl = 'http://api.leley.org:8082';
//  var baseUrl = 'http://172.16.2.9:8080';

var baseImgUrl = 'http://img.leley.org/';
var HOME_DEPT_LIST = [{id : '172',name : '职业病科'},{id : '133',name : '耳鼻喉科'},{id : '138',name : '皮肤科'},{id : '95',name : '老年科'}];

//线上
// var baseUrl = 'http://api.leley.com';
// var baseImgUrl = 'http://img.leley.com/';
// var HOME_DEPT_LIST = [{id : '172',name : '职业病科'},{id : '133',name : '耳鼻喉科'},{id : '138',name : '皮肤科'},{id : '95',name : '老年科'}];

var TOKEN　= window.app && app.getToken && app.getToken() || (!window.app && 'f0ec9f3c6c6140e39cd442350f6e5bd71502782180670');
var PHONE = window.app && app.getPhone && app.getPhone() || (!window.app && '17072873994');
function HttpRequest(){
    var _this = this;
    _this.baseRequest = function (cb,opts) {
        cb = cb || function () {};
        var requestMethod = opts.data && opts.data.METHOD;
        var defaults={
            url : '',
            type : 'post',
            data : {
                SIGN : Date.now(),
                REQTIME : Date.now(),
                TOKEN : TOKEN,
                PHONE : PHONE,
                USERTYPE : 2
            },
            timeout : 30000,
            contentType : 'application/x-www-form-urlencoded;charset=utf-8',
            processData : true,
            crossDomain: true,
            complete : function (xhr, status) {
                if(xhr.status === 200 && status === 'success'){
                    var result = xhr.responseJSON || JSON.parse(xhr.responseText);
                    if(result.code !== '000') {
                        layer.open({
                            content: (result.msg || '服务器内部错误')
                            ,skin: 'msg'
                            ,time : 5
                        });
                    }
                    cb(result);
                }else if(status === 'timeout'){
                    layer.closeAll('loading');
                    layer.open({
                        content: '请求超时，请稍后重试'
                        ,skin: 'msg'
                        ,time : 5
                    });
                    cb(status);
                }else{
                    layer.closeAll('loading');
                    layer.open({
                        content: requestMethod+'请求失败，请稍后重试'
                        ,skin: 'msg'
                        ,time : 5
                    });
                    cb(status);
                }
            }
        };
        opts = $.extend(true,defaults,opts);
        $.ajax(opts);
    };

    //获取挂号可选科室列表
    _this.getRegisterDeptList = function (cb) {
        new HttpRequest().leleyStatistics({
            'type':'load',
            'opt':'getRegDeptList',
            'tag':'2'
        });
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'getregdeptlist',
                RECDATA: JSON.stringify({
                    nthospitalid:HOSPITALID
                })
            }
        };
        _this.baseRequest(cb,opts);
    };
    //获取挂号可选专家医生列表
    _this.getregDoctList = function (deptId,cb) {
        new HttpRequest().leleyStatistics({
            'type':'word',
            'opt':'getRegDoctList',
            'tag':'3'
        });
        var opts = {
            url: baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'getregdoctlist',
                RECDATA: JSON.stringify({
                    nthospitalid:HOSPITALID,
                    deptid:deptId
                })
            }
        };
        _this.baseRequest(cb,opts);
    };
    //获取时间段可选医生列表
    _this.getonedayregdoctlist = function (deptId,day,cb) {
        new HttpRequest().leleyStatistics({
            'type':'word',
            'opt':'getOneDayDoctList',
            'tag':'3'
        });
        var opts = {
            url: baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'getonedayregdoctlist',
                RECDATA: JSON.stringify({
                    nthospitalid:HOSPITALID,
                    deptid:deptId,
                    day:day
                })
            }
        };
        _this.baseRequest(cb,opts);
    };
    //获取网络医院科室列表
    _this.getDeptList = function (cb) {
        var opts = {
            url : baseUrl + '/app/v2/department',
            data :{
                METHOD:'depttype',
                RECDATA: JSON.stringify({
                    hospitalid:HOSPITALID
                    ,areaid : '-1'
                })
            }
        };
        _this.baseRequest(cb,opts);
    };
    //获取医生列表
    _this.getDoctorList = function (modal,cb) {
        for(var key in modal){//强制转化string
            modal[key] = modal[key].toString();
        }
        modal.hospid = HOSPITALID;
        modal.areaid = "-1";
        var opts = {
            url : baseUrl + '/app/v2/puser',
            data :{
                METHOD:'doctorlist',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //获取住院信息列表
    _this.getzypatlist = function (cb) {
        new HttpRequest().leleyStatistics({
            'type':'load',
            'opt':'hosptalizationPay',
            'tag':'5'
        });
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'getzypatlist'
            }
        };
        _this.baseRequest(cb,opts)
    };
    //住院详情
    _this.getHospitalDetail = function (modal, cb) {
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'getzypatinfo',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //绑定住院号
    _this.bindInPatientId = function (modal, cb) {
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'bindinpatient2user',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //住院清单
    _this.getzyfylist = function (cardno,startdate,enddate,cb) {
      var opts = {
          url : baseUrl + '/app/v1/nthospital',
          data :{
              METHOD:'getzyfylist',
              RECDATA: JSON.stringify({
                  inpatientid:cardno,
                  startdate:startdate,
                  enddate:enddate
              })
          }
      };
      _this.baseRequest(cb,opts)
    };
    //住院预交金缴存
    _this.submitPrepaid = function (modal,cb) {
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'createyjjorder',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //查询未缴费列表
    _this.getRecipeList = function (modal, cb) {
        new HttpRequest().leleyStatistics({
            'type':'word',
            'opt':'notPayyet',
            'tag':'4'
        });
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'getrecipelist',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //查询已缴费列表
    _this.getRecipePaidList = function (modal, cb) {
        new HttpRequest().leleyStatistics({
            'type':'word',
            'opt':'payed',
            'tag':'4'
        });
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'getrecipepaidlist',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //生成门诊缴费订单
    _this.createRecipeOrder = function (modal,cb) {
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'createrecipeorder',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts);
    };
    //获取检查报告列表
    _this.getReportList = function (cb) {
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'getQueryReportList' //examinedata
            }
        };
        _this.baseRequest(cb,opts)
    }

    //获取检查报告详情
    _this.getReportDetail = function (modal,cb) {
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'examineresult',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //CT检查报告详情
    _this.getCTReportDetail = function (modal,cb) {
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'pacsgetreport',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
 //超聲检查报告详情
    _this.gettrasonicReportDetail = function (modal,cb) {
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data :{
                METHOD:'getUltrasonicReports',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };

    //我的就诊卡列表
    _this.getMedicalCard=function (cb) {
        var opts = {
            url : baseUrl + '/app/medicalcard',
            data :{
                METHOD:'getmedicalcardlist'
            }
        };
        _this.baseRequest(cb,opts);
    };
    //新建电子就诊卡
    _this.createPatientIdCard = function (modal,cb) {
        var opts = {
            url : baseUrl + '/app/medicalcard',
            data :{
                METHOD:'adddigitalmedicalcard',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts);
    };
    //绑定就诊卡(实体)
    _this.addMedicalCardBand=function (modal,cb) {
        var opts = {
            url :baseUrl + '/app/medicalcard',
            data:{
                METHOD:'addmedicalcard',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //乐乐医通用统计接口
    _this.leleyStatistics = function (modal,cb) {
        var defaults = {
                "channel": 'leley',        //渠道
                "type" : "",               //类型
                "opt" : "",                //操作
                "tag" : "",                //标签
                "origin" : location.href,  //当前操作的页面地址
                "desc":"",                 //描述
                "extend": ""               //扩展json字符串
        };
        modal = $.extend(true,defaults,modal);
        var opts = {
            url :baseUrl + '/v1/count',
            data:{
                METHOD:'count',
                RECDATA: JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //在线门诊小红点
    _this.getServiceUserOrderCount = function (cb) {
        var opts = {
            url :baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'getServiceUserOrderCount'
            }
        };
        _this.baseRequest(cb,opts)
    };
    //诊疗服务小红点
    _this.getClinicCount = function (cb) {
        var opts = {
            url :baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'getClinicCount',
                RECDATA:JSON.stringify({"day" : new Date(Date.now()+8*3600000).toISOString().replace(/T.*/,'')})
            }
        };
        _this.baseRequest(cb,opts)
    };
    //检查报告小红点
    _this.getReportCount = function (cb) {
        var opts = {
            url :baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'getLittleRedDot',
                RECDATA:JSON.stringify({"day" : new Date(Date.now()+8*3600000).toISOString().replace(/T.*/,'')})
            }
        };
        _this.baseRequest(cb,opts)
    };
    //互联网诊室
    _this.networkClinic = function (doctorid,cb) {
        var opts = {
            url :baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'networkclinic',
                RECDATA:JSON.stringify({doctorid : doctorid})
            }
        };
        _this.baseRequest(cb,opts)
    };
    //搜索医生
    _this.searchDoctor = function (modal, cb) {
        var opts = {
            url : baseUrl + '/v1/search',
            data: {
                METHOD:'search',
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //支付宝
    _this.alipay = function (modal,cb) {
        var opts = {
            url : baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'paywithsocial',
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts);
    };
    //banner配置接口
    _this.homeBanner = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'netWorkBanner',
                RECDATA:''
            }
        };
        _this.baseRequest(cb,opts);
    };
    //创建配送单
    _this.searchGroupDetail = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'createDeliveryOrder',
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //邮费和服务费
    _this.searchPrice = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'queryDeliveryPrice',
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //查询寄送单详情
    _this.sendDetail = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'queryDeliveryOrderDetail',
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //查询物流详细信息
    _this.sendExpress = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'queryLogisticsInformation',
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    //查询我的报告寄送记录
    _this.sendMyRecord = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'queryMyDeliveryOrders', //queryLogisticsInformation
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    // 查询我的收货地址列表
    _this.searchMyAdressList = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'queryMyDeliveryAddresses',
                RECDATA:''
            }
        };
        _this.baseRequest(cb,opts)
    };
    // 查询收货地址详细信息
    _this.searchMyAddressDetails = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'getDeliveryAddresses',
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    // 新增收货地址
    _this.addNewDeliveryAddress = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'addDeliveryAddress',
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    // 修改收货地址
    _this.editorDeliveryAddress = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'updateDeliveryAddress',
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
     // 删除收货地址
    _this.deleteDeliveryAddress = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'deleteDeliveryAddress',
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };
    // 设置默认收货地址
    _this.setDefaultDeliveryAddress = function (modal, cb) {
        var opts = {
            url:baseUrl + '/app/v1/nthospital',
            data:{
                METHOD:'setDefaultAddress',
                RECDATA:JSON.stringify(modal)
            }
        };
        _this.baseRequest(cb,opts)
    };

}
/*网络请求基础模块结束*/

//判断是否为app访问
function isAppVisit() {
    var whiteIpList = [
        '127.0.0.1'
        // ,'172.16.5.148'
        // ,'172.16.5.20'
    ];
    return !!(whiteIpList.indexOf(location.hostname) > -1 || window.app && app.getToken);
}
//app分享功能
function pageShare(modal) {
    modal = modal || {};
    var defaultModal = {
        title : '华西第四医院',
        description : '互联网医院,你的掌上家庭医生!在线门诊/快速挂号/医嘱缴费,诊疗服务一站解决。',
        url : location.href,
        icon : 'http://img.leley.com/html/network_hospital/image/logo.png'
    };
    modal = $.extend(true,defaultModal,modal);
    function regShareCallback(e){}
    if(window.app && app.getSign){
        try{app.call("registerShare", JSON.stringify(modal), "regShareCallback");}catch(e){}
    }
}