import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import WhyScreen from "../Screens/WhyScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import SignInScreen from "../Screens/SignInScreen";
import CreateAccountScreen from "../Screens/CreateAccountScreen";
import {Image, StyleSheet, TouchableOpacity} from "react-native";



/*Her har vi stack navigationen*/
const AuthStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/

        Welcome:{screen: WelcomeScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle:(<Image style={{width: 300, height: 70, flex: 1,}} resizeMode="contain" source={require('../../assets/hvid-navn.png')}/>),
                headerTitleAlign: 'center'
            }),
        },

        Why: { screen: WhyScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle:(<Image style={{width: 300, height: 70,}} resizeMode="contain" source={require('../../assets/hvid-navn.png')}/>),
                headerTitleAlign: 'center'
            }),},

        SignIn:{screen: SignInScreen,navigationOptions: ({ navigation }) => ({
                headerTitle:(<Image style={{width: 300, height: 70,}} resizeMode="contain" source={require('../../assets/hvid-navn.png')}/>),
                headerTitleAlign: 'center'
            }),},

        CreateAccount:{screen: CreateAccountScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle:(<Image style={{width: 300, height: 70,}} resizeMode="contain" source={require('../../assets/hvid-navn.png')}/>),
                headerTitleAlign: 'center'
            }),},

    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'Welcome',
        navigationOptions:{
            title:'Main'
        },
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#32593c',
                headerTitleAlign: 'center'
            },

            headerTintColor: '#fff',

        },
    }
);
/*Skyd det afsted så App.js kan bruge componenet*/
export default AuthStack;
