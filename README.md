# cesium-navigation-es6
This is a Cesium plugin that adds to the Cesium map a user friendly compass, navigator (zoom in/out), and
distance scale graphical user interface.


## Demo
[cesium plugin /demo](https://richard1015.github.io/cesium/)
# Code Demo

[https://github.com/richard1015/cesium-vue-example /(cesium-print,cesium-navigation-es6)](https://github.com/richard1015/cesium-vue-example/blob/master/src/components/CesiumViewer.vue)

![预览](https://github.com/richard1015/richard1015.github.io/blob/master/static/image/cesium-navigation-es6.png "demo.png")

**Why did you build it?**

First of all the Cesiumjs sdk does not includes a compass, navigator (zoom in/out), and distance scale. You can use the mouse to navigate on the map, but this navigation plugin offers more navigation control and capabilities to the user. Some of the capabilities are: reset the compass to point to north, reset the orbit, and
reset the view to a default bound.

**为什么你建立cesium-navigation插件？**

首先，所有的 Cesiumjs sdk 不包括罗盘，导航仪（放大/缩小）和距离刻度。您可以使用鼠标在地图上导航，但这个导航插件可为用户提供更多的导航控制和功能。其中一些功能是：将罗盘重置为指向北部，重置轨道，并将视图重置为默认边界。

**How to use it?**

## QuickStart

<!-- add docs here for user -->

```bash
$ npm install cesium-navigation-es6 --save
```
###  ES modules 
``` html
<div id="cesiumContainer"></div>
```

``` javascript
import {  Viewer,Rectangle} from "cesium";
import 'cesium/Build/Cesium/Widgets/widgets.css';
import CesiumNavigation from "cesium-navigation-es6";

const viewer = new Viewer("cesiumContainer",{
    animation:false,
    timeline:false
});

const options = {};
// 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
options.defaultResetView = Rectangle.fromDegrees(80, 22, 130, 50);
// 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
options.enableCompass= true;
// 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
options.enableZoomControls= true;
// 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
options.enableDistanceLegend= true;
// 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
options.enableCompassOuterRing= true;

//修改重置视图的tooltip
options.resetTooltip = "重置视图";
//修改放大按钮的tooltip
options.zoomInTooltip = "放大";
//修改缩小按钮的tooltip
options.zoomOutTooltip = "缩小";

//如需自定义罗盘控件，请看下面的自定义罗盘控件
new CesiumNavigation(viewer, options);
```
### Browser

``` javascript
<script src="/CesiumNavigation.umd.js"></script>
```

``` html
<div id="cesiumContainer"></div>
```

``` javascript
import {  Viewer,Rectangle} from "cesium";
import 'cesium/Build/Cesium/Widgets/widgets.css';

const viewer = new Viewer("cesiumContainer",{
    animation:false,
    timeline:false
});

const options = {};
// 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
options.defaultResetView = Rectangle.fromDegrees(80, 22, 130, 50);
// 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
options.enableCompass= true;
// 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
options.enableZoomControls= true;
// 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
options.enableDistanceLegend= true;
// 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
options.enableCompassOuterRing= true;

//修改重置视图的tooltip
options.resetTooltip = "重置视图";
//修改放大按钮的tooltip
options.zoomInTooltip = "放大";
//修改缩小按钮的tooltip
options.zoomOutTooltip = "缩小";

//如需自定义罗盘控件，请看下面的自定义罗盘控件
new CesiumNavigation(viewer, options);
```

## 自定义罗盘控件

1.重写样式

[css请参考/github](https://github.com/richard1015/cesium-navigation-es6/blob/master/test/test.css)

[less请参考/github](https://github.com/richard1015/cesium-navigation-es6/blob/master/test/test.less)

[js请参考/github](https://github.com/richard1015/cesium-navigation-es6/blob/master/test/index.js)

2. 自定义svg
```javascript
options.compassOuterRingSvg = '<svg viewBox="0 0 1024 1024" height="125" width="125"><path d="M510.994963 1021.989926C228.781827 1021.989926 0 793.208099 0 511.001284 0 228.775506 228.781827 0 510.994963 0c282.213136 0 510.994963 228.781827 510.994963 510.994963 0 282.213136-228.781827 510.994963-510.988642 510.994963z m2.168099-171.052247c186.544988 0 337.774617-151.22963 337.774617-337.774617 0-186.551309-151.22963-337.780938-337.774617-337.780939-186.551309 0-337.780938 151.22963-337.780939 337.780939 0 186.544988 151.22963 337.774617 337.780939 337.774617z"  ></path><path d="M818.529975 808.783012m-9.746963 0a9.746963 9.746963 0 1 0 19.493926 0 9.746963 9.746963 0 1 0-19.493926 0Z" fill="#FFFFFF" ></path><path d="M818.529975 224.123259m-9.746963 0a9.746963 9.746963 0 1 0 19.493926 0 9.746963 9.746963 0 1 0-19.493926 0Z" fill="#FFFFFF" ></path><path d="M194.888691 808.783012m-9.746963 0a9.746963 9.746963 0 1 0 19.493926 0 9.746963 9.746963 0 1 0-19.493926 0Z" fill="#FFFFFF" ></path><path d="M194.888691 224.123259m-9.746963 0a9.746963 9.746963 0 1 0 19.493926 0 9.746963 9.746963 0 1 0-19.493926 0Z" fill="#FFFFFF" ></path><path d="M536.854123 146.166519v-63.159309h-14.98074v38.97521l-29.139753-38.97521H478.561975v63.159309h15.069235v-38.886717l29.051259 38.886717zM906.227358 519.016296h58.469136v-5.12h-58.469136zM58.469136 519.016296h58.469136v-5.12H58.469136zM513.896296 906.227358v58.469136h5.12v-58.469136z" fill="#FFFFFF" ></path></svg>'
options.compassRotationMarkerSvg = '<svg height="125" width="125" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="#000000fe"><path  opacity="1.00" d=" M 493.42 0.00 L 528.50 0.00 C 529.86 0.78 531.41 1.07 532.98 1.02 C 558.91 1.32 584.63 5.22 610.11 9.75 C 686.00 24.72 758.57 56.91 819.99 104.02 C 838.75 118.42 857.23 133.51 873.12 151.06 C 852.34 172.59 830.81 193.46 809.75 214.75 C 790.09 234.12 770.97 254.08 751.00 273.10 C 711.38 234.16 662.29 204.75 608.90 189.13 C 545.25 170.28 476.14 171.23 412.73 190.59 C 360.53 206.58 313.00 236.14 274.02 274.19 C 251.77 252.75 230.24 230.49 208.25 208.75 C 188.88 189.09 168.91 169.97 149.90 150.00 C 159.46 138.85 171.04 129.70 182.05 120.05 C 263.97 50.32 368.79 8.45 476.01 1.15 C 481.81 0.78 487.70 1.39 493.42 0.00 Z" /></g></svg>'
options.compassGyroSvg = '<svg viewBox="0 0 17 17" height="26" width="26"><g id="compass-inner" fill-rule="nonzero"><path d="M8.5,16.5 C4.081722,16.5 0.5,12.918278 0.5,8.5 C0.5,4.081722 4.081722,0.5 8.5,0.5 C12.918278,0.5 16.5,4.081722 16.5,8.5 C16.5,12.918278 12.918278,16.5 8.5,16.5 Z M8.5,15.5 C12.3659932,15.5 15.5,12.3659932 15.5,8.5 C15.5,4.63400675 12.3659932,1.5 8.5,1.5 C4.63400675,1.5 1.5,4.63400675 1.5,8.5 C1.5,12.3659932 4.63400675,15.5 8.5,15.5 Z" id="Oval-96"></path><path d="M9.92599835,7.09066832 C12.7122872,9.87695712 14.3709388,12.5452228 13.4497471,13.4664145 C12.5285555,14.3876061 9.86028979,12.7289545 7.074001,9.94266568 C4.2877122,7.15637688 2.62906055,4.48811119 3.55025221,3.56691953 C4.47144386,2.64572788 7.13970955,4.30437952 9.92599835,7.09066832 Z M9.21889157,7.7977751 C6.92836458,5.50724811 4.52075769,4.01062761 4.25735899,4.27402631 C3.99396029,4.53742501 5.49058078,6.9450319 7.78110778,9.2355589 C10.0716348,11.5260859 12.4792417,13.0227064 12.7426404,12.7593077 C13.0060391,12.495909 11.5094186,10.0883021 9.21889157,7.7977751 Z" id="Oval-96-Copy-2"></path><path d="M9.92599835,9.94266568 C7.13970955,12.7289545 4.47144386,14.3876061 3.55025221,13.4664145 C2.62906055,12.5452228 4.2877122,9.87695712 7.074001,7.09066832 C9.86028979,4.30437952 12.5285555,2.64572788 13.4497471,3.56691953 C14.3709388,4.48811119 12.7122872,7.15637688 9.92599835,9.94266568 Z M9.21889157,9.2355589 C11.5094186,6.9450319 13.0060391,4.53742501 12.7426404,4.27402631 C12.4792417,4.01062761 10.0716348,5.50724811 7.78110778,7.7977751 C5.49058078,10.0883021 3.99396029,12.495909 4.25735899,12.7593077 C4.52075769,13.0227064 6.92836458,11.5260859 9.21889157,9.2355589 Z" id="Oval-96-Copy-3"></path><path d="M15.1464466,1.1464466 L14.3453364,1.94755684 L13.9608692,2.33202401 L14.667976,3.03913077 L15.0524431,2.65466362 L15.8535534,1.8535534 L15.1464466,1.1464466 Z M2.29760014,13.995293 L1.85311902,14.4397742 L1.004311,15.2885822 L1.71141776,15.995689 L2.56022581,15.146881 L3.00470698,14.7023998 L2.29760014,13.995293 Z" id="Line"></path><circle id="Oval-432" cx="16" cy="1" r="1"></circle><circle id="Oval-432-Copy" cx="1" cy="16" r="1"></circle></g></svg>'
```

## Other Cesium Plugin 
[cesium-print /github](https://github.com/richard1015/cesium-print)

### 参考文章
[https://www.jianshu.com/p/dd364b59b774](https://www.jianshu.com/p/dd364b59b774)  

[https://www.jianshu.com/p/fb237c7eb48c](https://www.jianshu.com/p/fb237c7eb48c)  

[https://blog.csdn.net/Prepared/article/details/68940997?locationNum=10&fps=1](https://blog.csdn.net/Prepared/article/details/68940997?locationNum=10&fps=1)
