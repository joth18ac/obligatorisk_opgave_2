import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

const RootStack = createStackNavigator({
    Auth:{screen: AuthStack },
    Home: { screen: HomeStack},
},

{
    /*Hvilket View skal starte*/
    initialRouteName:'Auth',
        headerMode: 'none',
    navigationOptions: {
    headerVisible: false,
},
},

);export default RootStack;


