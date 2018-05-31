import React from 'react'
import {View} from 'react-native'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
export default class extends React.Component {
    render(){
        return (
            <MapboxGL.MapView
                style={{flex:1}}
            />
        )
    }
}