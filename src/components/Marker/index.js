import React from 'react'
import MapboxGL from '@mapbox/react-native-mapbox-gl'

export default class extends React.Component {
    render(){
        const coordinates = [];
        for(let i=0;i<1000;i++){
            const lat = Math.floor((Math.random()-0.5)*360);
            const lng = Math.floor((Math.random()-0.5)*360);
            coordinates.push([lat,lng])
        }
        const geoJSON = {

                    "type": "Feature",
                    "properties": {

                    },
                    "geometry": {
                        "type": "MultiPoint",
                        "coordinates": coordinates
                    }

        }
        return (
            <MapboxGL.MapView style={{flex:1}}>
                <MapboxGL.ShapeSource id="asd" shape={geoJSON}>
                    <MapboxGL.SymbolLayer id="qwe" style={styles.mark}/>
                </MapboxGL.ShapeSource>
            </MapboxGL.MapView>
        )
    }
}

const styles = MapboxGL.StyleSheet.create({
    mark:{
        textField:'·',
        textSize:20,
        textIgnorePlacement:true,
        textOffset:[0,2],
        textKeepUpright:true,
        textPadding:20,
        textColor:'white',
        textHaloColor:'black',
        textHaloWidth:1,
    },
});