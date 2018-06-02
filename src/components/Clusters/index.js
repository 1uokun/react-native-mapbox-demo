import React from 'react'
import MapboxGL from '@mapbox/react-native-mapbox-gl'

export default class extends React.Component {
    render(){
        return (
            <MapboxGL.MapView
                style={{flex:1}}
            >
                <MapboxGL.ShapeSource
                    id="symbolLocationSource"
                    cluster={true}
                    url="https://www.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
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