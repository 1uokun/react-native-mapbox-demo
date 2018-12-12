import React from 'react'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import Supercluster from 'supercluster';

const supercluster = new Supercluster({
    radius: 40,
    maxZoom: 16
});

export default class extends React.Component {
    state={
        zoom:0,
        trees:[]
    };

    componentWillMount(){
        //create random point
        const coordinates = [];
        for(let i=0;i<1000;i++){
            const lat = Math.floor((Math.random()-0.5)*360);
            const lng = Math.floor((Math.random()-0.5)*360);
            coordinates.push([lat,lng])
            coordinates.push({
                "type": "Feature",
                "properties": {
                    "id": "ak"+i,
                    "mag": 2.3,
                    "time": 1507425650893,
                    "felt": null,
                    "tsunami": 0
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [lat,lng, 0.0]
                }
            })
        }
        //将GeoJSON点转换为点聚合类型的坐标点
        supercluster.load(coordinates);
    }
    render(){
        return (
            <MapboxGL.MapView
                ref={(c) => (this.map = c)}
                style={{flex:1}}
                onRegionDidChange={(e)=>{
                    //监听zomm变化并存储到state，以便加载相应zoom的GeoJSON
                    this.map.getZoom().then(res=>{
                        this.setState({
                            zoom:res.toFixed(0)
                        })
                    })
                }}
            >
                <MapboxGL.ShapeSource
                    id="symbolLocationSource"
                    cluster={true}
                    shape={{
                        "type": "FeatureCollection",
                        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                        "features": supercluster.getClusters([-180, -85, 180, 85], this.state.zoom*1)
                    }}
                    // url="https://www.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
                >
                    <MapboxGL.SymbolLayer
                        id='SymbolLayerPoints'
                        style={layerStyles.clusterCount}
                    />
                    <MapboxGL.CircleLayer
                        id='clusteredPoints'
                        belowLayerID='pointCount'
                        filter={['has', 'point_count']}
                        style={layerStyles.clusteredPoints} />
                </MapboxGL.ShapeSource>
            </MapboxGL.MapView>
        )
    }
}


const layerStyles = MapboxGL.StyleSheet.create({
    clusteredPoints: {
        circleColor: MapboxGL.StyleSheet.source([
            [25, 'yellow'],
            [50, 'red'],
            [75, 'blue'],
            [100, 'orange'],
            [300, 'pink'],
            [750, 'white'],
        ], 'point_count', MapboxGL.InterpolationMode.Exponential),

        circleRadius: MapboxGL.StyleSheet.source([
            [0, 15],
            [100, 20],
            [750, 30],
        ], 'point_count', MapboxGL.InterpolationMode.Exponential),

        circleOpacity: 0.84,
        circleStrokeWidth: 2,
        circleStrokeColor: 'white',
    },
    clusterCount: {
        textField: '{point_count}',
        textSize: 12,
    },
});