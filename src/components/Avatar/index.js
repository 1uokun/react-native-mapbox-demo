import React from 'react'
import {View,Image} from 'react-native'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
const img = "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
export default class extends React.Component {
    render(){
        return (
            <MapboxGL.MapView
                style={{flex:1}}
            >
                <MapboxGL.PointAnnotation
                    id="qwe"
                    title={"标题"}
                    snippet={"描述\nant女神"}
                    // selected={true}
                    anchor={{ x: 0.5, y: 0.5 }}
                    coordinate={[-151.5129, 63.1016]}
                >
                        <Image
                            source={{uri:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}}
                            style={{width:40,height:40,borderRadius:40}}
                        />
                    <MapboxGL.Callout
                        title={"asdasd"}
                    />
                </MapboxGL.PointAnnotation>
            </MapboxGL.MapView>
        )
    }
}