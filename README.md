<a href="https://www.mapbox.com">
  <img src="https://raw.githubusercontent.com/mapbox/react-native-mapbox-gl/master/assets/mapbox_logo.png" width="500"/>
</a>

# react-native-mapbox-gl各组件使用案例

* [原地址](https://github.com/mapbox/react-native-mapbox-gl/) 
* [更多案例](https://www.mapbox.com/mapbox-gl-js/example/add-image-generated/)

## 列表

### Components
* [MapView](/src/components/MapView/index.js)
* Light
* StyleSheet
* PointAnnotation
* Callout

### Sources
* VectorSource
* ShapeSource
* RasterSource

### Turfjs应用
* Turfjs更多应用 - http://turfjs.org/
* [Measure distances](/src/components/Distance/index.js)
支持多点测距
<a href="/src/components/Distance/index.js">
  <img src="/assets/Distance.jpg" width="250"/>
</a>

* [polygon area](/src/components/Area/index.js)
计算面积
<a href="/src/components/Area/index.js">
  <img src="/assets/Area.jpg" width="250"/>
</a>

* [circle geoJSON](/src/components/Circle/index.js)
圆形geoJSON [issuce](https://github.com/geojson/geojson-spec/issues/1)
<a href="/src/components/Circle/index.js">
  <img src="/assets/Circle.jpg" width="250"/>
</a>

### Layers
* BackgroundLayer
* [CircleLayer](/src/components/Clusters/index.js)
点聚合案例
<a href="/src/components/Clusters/index.js">
  <img src="/assets/Clusters.jpg" width="250"/>
</a>

* [FillExtrusionLayer](/src/components/Indoor/index.js)
室内3D图层
<a href="/src/components/Indoor/index.js">
  <img src="/assets/Indoor.jpg" width="250"/>
</a>

* FillLayer
* LineLayer
* RasterLayer
* [SymbolLayer](/src/components/Marker/index.js)
支持海量点
<a href="/src/components/Marker/index.js">
  <img src="/assets/Marker.jpg" width="250"/>
</a>

### Offline
* OfflineManager
* SnapshotManager

### 其他
* [自动规划路线接口](https://www.mapbox.com/bites/00058/#)
* [地图数据提供商](https://data.jianshukeji.com/)