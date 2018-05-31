module.exports = {
    BASIC : [
        {
            title: 'MapView',
            description: '基本地图',
            module: require('./components/MapView'),
        },
        {
            title:'Marker',
            description: 'marker实例',
            module:require('./components/Marker')
        },
        {
            title:'Clusters',
            description: 'Clusters点聚会应用',
            module:require('./components/Clusters')
        }
    ]
};