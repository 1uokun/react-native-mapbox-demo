module.exports = {
    BASIC : [
        {
            title: 'MapView',
            description: '基本地图',
            module: require('./components/MapView'),
        },
        {
            title: 'PointAnnotation',
            description: '点注解+callout',
            module: require('./components/Avatar'),
        },
    ],
    Layers : [
        {
            title:'CircleLayer',
            description: 'Clusters点聚合应用',
            module:require('./components/Clusters')
        },
        {
            title:'FillExtrusionLayer',
            description: '室内3D图层',
            module:require('./components/Indoor')
        },
        {
            title:'SymbolLayer',
            description: 'Marker实例',
            module:require('./components/Marker')
        },
    ],
    Offline : [
        {
            title:'OfflineManager',
            description: '离线地图',
            module:require('./components/Offline')
        },
    ]
};