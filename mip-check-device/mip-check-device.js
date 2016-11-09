/**
 * 如果不是手机则跳转到pc链接
 */

define(function (require) {
    /*
     * 工具方法
     */
    function replaceAll(str1,str2,str3){//str1为母字符串，str2为要替换的。str3为替换成的
        var k
        var tmp = str1.split(str2)
        k=tmp[0]
        for(i=1;i<tmp.length;i++){
            k+=str3+tmp[i]
        }
        return k
    }
    function check(mobile_url,pc_url) {
        var url = location.search;
        url = url.substr(1);
        var bs={
                versions:function(){
                   var u = navigator.userAgent, app = navigator.appVersion;
                   return {//移动终端浏览器版本信息
                        trident: u.indexOf('Trident') > -1, //IE内核
                        presto: u.indexOf('Presto') > -1, //opera内核
                        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                        mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
                        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                        iPad: u.indexOf('iPad') > -1 //是否iPad                
                    };
                 }(),
                 language:(navigator.browserLanguage || navigator.language).toLowerCase()
            } 
            if(bs.versions.mobile && url!='mobile'){

                if(!bs.versions.android && !bs.versions.iPhone && !bs.versions.iPad){
                    current_url = window.location.href;
                    target_url = replaceAll(current_url,mobile_url,pc_url);
                    window.location = target_url;
                }
            }
    }
    
    var customElem = require('customElement').create();

    customElem.prototype.build = function() {
        var mobile = this.element.getAttribute('mobileUrl');
        var pc = this.element.getAttribute('pcUrl');
        // 初始化各模块
        check(mobile,pc);
    };

    return customElem;
});

