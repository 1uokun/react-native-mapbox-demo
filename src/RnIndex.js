import React from 'react';
import {View, ScrollView } from 'react-native';
import { ListItem, Subheader, Toolbar } from 'react-native-material-ui';
import {BASIC,Layers} from './demoList'
import MapboxGL from "@mapbox/react-native-mapbox-gl/javascript/index";
MapboxGL.setAccessToken("sk.eyJ1IjoiMXVva3VuIiwiYSI6ImNqZ3JtdnVwYzA3MzMzMW54Zjlld2U0YjIifQ.Sz0Wlb5y0d8DZFKxVSekyg");

export default class extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Toolbar
                    // leftElement="arrow-back"
                    // onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="MapboxGL实例"
                />
                <ScrollView>
                    {[{header:"基础",item:BASIC},{header:"Layers",item:Layers}].map((a,i)=>{
                        return (
                            <View key={i}>
                            <Subheader text={a.header} />
                                {a.item.map((b,i)=>{
                                    return (
                                        <ListItem
                                            key={i}
                                            divider
                                            centerElement={{
                                                primaryText: b.title,
                                                secondaryText: b.description,
                                            }}
                                            onPress={()=>this.props.navigation.navigate(b.title)}
                                        />
                                    )
                                })}
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}