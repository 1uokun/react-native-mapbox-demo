import React from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import indoorMapGeoJSON from '../../json/indoor_3d_map.json';

export default class extends React.Component {
    render(){
        return (
            <MapboxGL.MapView
                style={{flex:1}}
                centerCoordinate={[-87.618312, 41.866282]}
            >
                <MapboxGL.ShapeSource
                    id="indoorBuildingSource"
                    shape={indoorMapGeoJSON}
                >
                    <MapboxGL.FillExtrusionLayer
                        id="building3d"
                        style={layerStyles.building}
                    >

                    </MapboxGL.FillExtrusionLayer>
                </MapboxGL.ShapeSource>
            </MapboxGL.MapView>
        )
    }
}

const layerStyles = MapboxGL.StyleSheet.create({
    light: {},
    building: {
        fillExtrusionOpacity: 0.5,
        fillExtrusionHeight: MapboxGL.StyleSheet.identity('height'),
        fillExtrusionBase: MapboxGL.StyleSheet.identity('base_height'),
        fillExtrusionColor: MapboxGL.StyleSheet.identity('color'),
        fillExtrusionColorTransition: { duration: 2000, delay: 0 },
    },
});
