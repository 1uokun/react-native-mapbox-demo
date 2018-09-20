import React from 'react'
import length from '@turf/length'
import {lineString} from '@turf/helpers'
import { ToastAndroid } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl'


export default class ShowPointAnnotation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinates: [],
        }
    }
    onPress = (feature) => {
        const coords = Object.assign([], this.state.coordinates);
        coords.push(feature.geometry.coordinates);
        this.setState({ coordinates: coords });
        this.getDistance(coords)
    }


    getDistance(coords){
        // 获得两点距离 首先点数要超过俩
        if(coords.length>1){
            let line = lineString(coords);
            ToastAndroid.show(length(line, {units: 'kilometers'})+'',ToastAndroid.LONG,);
        }
    }

    renderAnnotations(){
        const items = [];

        for (let i = 0; i < this.state.coordinates.length; i++) {
            const coordinate = this.state.coordinates[i];

            items.push(
                <MapboxGL.PointAnnotation
                    title={''}
                    snippet={i+''}
                    id={i+''}
                    coordinate={coordinate}
                    onSelected={()=>this.removePoint(i)}
                >
                </MapboxGL.PointAnnotation>
            );
        }

        return items;
    }

    removePoint(i){
        if(this.state.coordinates.length>1){
            this.state.coordinates.splice(i,1);
            this.setState({coordinates:this.state.coordinates})
        }else {
            this.setState({coordinates:[]})
        }
        this.getDistance(this.state.coordinates)
    }

    render() {
        return (
            <MapboxGL.MapView
                ref={(c) => (this._map = c)}
                zoomLevel={16}
                onPress={this.onPress}
                centerCoordinate={[-73.99155, 40.73581]}
                style={{flex:1}}
            >
                {this.renderAnnotations()}
                <MapboxGL.ShapeSource id="distanceLine" shape={{
                    "type": "GeometryCollection",
                    "geometries":[
                        {
                            "type": "LineString",
                            "coordinates": this.state.coordinates
                        }
                    ]
                }}>
                    <MapboxGL.LineLayer id="distanceLine"/>
                </MapboxGL.ShapeSource>
            </MapboxGL.MapView>
        );
    }
}