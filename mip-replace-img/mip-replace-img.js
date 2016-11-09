/**
 * @file mip-demo 组件
 * @author
 */

define(function (require) {

    var customElement = require('customElement').create();
		function img_replace(str){
			return str.replace(/<img/g,'<mip-img');
		}
    /**
     * 构造元素，只会运行一次
     */
    customElement.prototype.build = function () {
        window.onload=function(){
			var body_dom = document.getElementsByTagName('body')[0];
			var img_mip=img_replace(body_dom.innerHTML.toString());
			body_dom.innerHTML = img_mip;
			console.log(img_mip)
		}
		
    };

    return customElement;
});
