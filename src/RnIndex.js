import React from 'react';
import {View, ScrollView } from 'react-native';
import { ListItem, Subheader, Toolbar } from 'react-native-material-ui';
import {BASIC} from './demoList'

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
                    {[{header:"基础",item:BASIC}].map((a,i)=>{
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