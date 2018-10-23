import React from 'react'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import circle  from '@turf/circle'

var center = [-73.99155, 40.73581];
var radius = 0.0006;
var options = {steps: 360, units: 'degrees', properties: {foo: 'bar'}};
var _circle = circle(center, radius, options);
export default class extends React.Component {
    render(){
        return (
            <MapboxGL.MapView
                zoomLevel={16}
                // onPress={this.onPress}
                centerCoordinate={[-73.99155, 40.73581]}
                style={{flex:1}}
            >
                <MapboxGL.ShapeSource
                    id="clusteredPoints"
                    shape={{
                        "type": "FeatureCollection",
                        "features": [
                            _circle
                        ]
                    }}
                >
                    <MapboxGL.FillLayer
                        id='clusteredPoints'
                        style={{fillOpacity:0.5}} />
                </MapboxGL.ShapeSource>
            </MapboxGL.MapView>
        )
    }
}
