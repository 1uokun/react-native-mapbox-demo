import React from 'react'
import {View} from 'react-native'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
export default class extends React.Component {
    render(){
        const rasterSourceProps = {
            id: 'stamenWatercolorSource',
            url: 'http://www.google.cn/maps/vt?lyrs=s@810&gl=cn&x={x}&y={y}&z={z}',
            tileSize: 256,
        };
        return (
            <MapboxGL.MapView
                style={{flex:1}}
                animated={true}
                localizeLabels={true}
                showUserLocation={true}
                logoEnabled={false}
                rotateEnabled={false}
                attributionEnabled={false}
                compassEnabled={false}
            >
                {/*瓦片图层（资源来自google.cn）*/}
                <MapboxGL.RasterSource {...rasterSourceProps}>
                    <MapboxGL.RasterLayer
                        layerIndex={100}
                        id="stamenWatercolorLayer"
                        sourceID="stamenWatercolorSource"
                        style={{ rasterOpacity: 1 }}
                    />
                </MapboxGL.RasterSource>
            </MapboxGL.MapView>
        )
    }
}