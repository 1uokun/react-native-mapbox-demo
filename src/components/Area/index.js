import React from 'react'
import area from '@turf/area'
import {polygon} from '@turf/helpers'
import { ToastAndroid } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl'


export default class ShowPointAnnotation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinates: [],
        }

        this.onPress = this.onPress.bind(this);
    }
    onPress(feature){
        const coords = Object.assign([], this.state.coordinates);
        if(coords.length===0){
            coords.push(feature.geometry.coordinates);
        }
        coords.splice(coords.length-1,0,feature.geometry.coordinates)
        this.setState({ coordinates: coords });
        this.getArea(coords)
    }


    getArea(coords){
        // 形成一个多边形 至少要3个点和一个回文点
        if(coords.length>3){
            let _polygon  = polygon([coords]);
            ToastAndroid.show('面积'+area(_polygon).toFixed(2)+'平方米',ToastAndroid.LONG,);
        }
    }

    renderAnnotations(){
        const items = [];

        for (let i = 0; i < this.state.coordinates.length; i++) {
            const coordinate = this.state.coordinates[i];

            items.push(
                <MapboxGL.PointAnnotation
                    key={i}
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
        let coordinates = this.state.coordinates;
        if(coordinates.length===2){
            this.setState({coordinates:[]})
            return;
        }
        if(i===0){
            coordinates[coordinates.length-1] = coordinates[1]
        }
        coordinates.splice(i,1);
        this.setState({coordinates:coordinates})
        this.getArea(this.state.coordinates)
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
                <MapboxGL.ShapeSource id="areaPolygon" shape={{
                    type: "Feature",
                    properties: { },
                    geometry: {
                        type: "Polygon",
                        coordinates: [this.state.coordinates]
                    }
                }}>
                    <MapboxGL.FillLayer id="areaPolygon"/>
                </MapboxGL.ShapeSource>
            </MapboxGL.MapView>
        );
    }
}