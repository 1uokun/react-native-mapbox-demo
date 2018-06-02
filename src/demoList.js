module.exports = {
    BASIC : [
        {
            title: 'MapView',
            description: '基本地图',
            module: require('./components/MapView'),
        },
    ],
    Layers : [
        {
            title:'SymbolLayer',
            description: 'Marker实例',
            module:require('./components/Marker')
        },
        {
            title:'CircleLayer',
            description: 'Clusters点聚会应用',
            module:require('./components/Clusters')
        }
    ]
};