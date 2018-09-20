import { StackNavigator } from 'react-navigation';
import React from 'react'
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import RnIndex from './src/RnIndex';
import { BASIC,Layers,turf,Offline } from './src/demoList';
const uiTheme = {
    palette: {
        primaryColor: COLOR.blue500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

const scenes = {
    native: {
        screen: RnIndex,
        navigationOptions:{
            header:null
        }
    },
};

[...BASIC,...Layers,...turf,...Offline].map((component) => {
    const Module = component.module.default;
    scenes[component.title] = {
        screen: Module,
        navigationOptions:{
            header:null
        }
    };
});

const App = StackNavigator(scenes);

export default class extends React.Component {
    render(){
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <App />
            </ThemeProvider>
        )
    }
}