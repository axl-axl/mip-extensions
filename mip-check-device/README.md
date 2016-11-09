# mip-check-device

mip-meishij实现了百分点统计,收藏和菜单添加，社会化分享。

标题|内容
----|----
类型|业务
支持布局|不使用布局
所需脚本|https://mipcache.bdstatic.com/static/v0.1/mip-meishij.js

## 示例

### 检测设备是否为手机，不是则修改域名为电脑链接
例如：

```html
<mip-check-device mobileUrl='m.baidu.com' pcUrl='www.baidu.com'>
	
</mip-check-device>
```