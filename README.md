# cesium-navigation-es6
This is a Cesium plugin that adds to the Cesium map a user friendly compass, navigator (zoom in/out), and
distance scale graphical user interface.

**Why did you build it?**

First of all the Cesiumjs sdk does not includes a compass, navigator (zoom in/out), and distance scale. You can use the mouse to navigate on the map, but this navigation plugin offers more navigation control and capabilities to the user. Some of the capabilities are: reset the compass to point to north, reset the orbit, and
reset the view to a default bound.

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
import Cesium from "cesium/Cesium";
import "cesium/Widgets/widgets.css";
import CesiumNavigation from "cesium-navigation-es6";


let viewer = new Cesium.Viewer("cesiumContainer");
CesiumNavigation(viewer, {});
```
 
 **Is there a demo using the plugin ?**

This is the demo:

(https://github.com/richard1015/cesium-vue)
 
