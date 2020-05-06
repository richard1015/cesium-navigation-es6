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

首先，所有的Cesiumjs sdk 不包括罗盘，导航仪（放大/缩小）和距离刻度。您可以使用鼠标在地图上导航，但这个导航插件可为用户提供更多的导航控制和功能。其中一些功能是：将罗盘重置为指向北部，重置轨道，并将视图重置为默认边界。

**How to use it?**

## QuickStart

<!-- add docs here for user -->



```bash
$ npm install cesium-navigation-es6 --save
```

```HTML
<template>
  <div id="cesiumContainer"></div>
</template>
<script type="text/javascript">
import {
  Viewer,Rectangle
} from "cesium/Source/Cesium.js";
import 'cesium/Build/Cesium/Widgets/widgets.css';
import CesiumNavigation from "cesium-navigation-es6";

let viewer = new Viewer("cesiumContainer");

var options = {};
// 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
options.defaultResetView = Rectangle.fromDegrees(80, 22, 130, 50);
// 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
options.enableCompass= true;
// 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
options.enableZoomControls= false;
// 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
options.enableDistanceLegend= false;
// 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
options.enableCompassOuterRing= true;

CesiumNavigation(viewer, options);
```



## Other Cesium Plugin 
[cesium-print /github](https://github.com/richard1015/cesium-print)

### 参考文章
[https://www.jianshu.com/p/dd364b59b774](https://www.jianshu.com/p/dd364b59b774)  

[https://www.jianshu.com/p/fb237c7eb48c](https://www.jianshu.com/p/fb237c7eb48c)  

[https://blog.csdn.net/Prepared/article/details/68940997?locationNum=10&fps=1](https://blog.csdn.net/Prepared/article/details/68940997?locationNum=10&fps=1)
