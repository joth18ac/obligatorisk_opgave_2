import {createStackNavigator} from "react-navigation-stack";
import HowScreen from "../Screens/HowScreen";
import WhyScreen from "../Screens/WhyScreen";
import WhereScreen from "../Screens/WhereScreen";
import HomeScreen from "../Screens/HomeScreen";
import {Image, TouchableOpacity} from "react-native";
import React from "react";
import StatsScreen from "../Screens/StatsScreen";
import ChangeInfoScreen from "../Screens/ChangeInfoScreen";
import {AntDesign, Entypo} from "@expo/vector-icons";
import {GlobalStyles} from "../../styles/GlobalStyles";




/*Her har vi stack navigationen*/
const HomeStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/

        Home :{screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle:(<Image style={{width: 275, height: 50,}} resizeMode="contain" source={require('../../assets/hvid.png')}/>),
                headerLeft:() => (
                    <TouchableOpacity style={GlobalStyles.antDesign}>
                        <AntDesign name="arrowright" size={24} color="#fff" />
                    </TouchableOpacity>
                ),
            })},

        How: {screen:HowScreen,
            navigationOptions: ({ navigation }) => ({
                 headerTitle:(<Image style={{width: 275, height: 50,}} resizeMode="contain" source={require('../../assets/hvid.png')}/>),
                 headerTitleAlign: 'center'
            })},

        Why: {screen:WhyScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle:(<Image style={{width: 275, height: 50,}} resizeMode="contain" source={require('../../assets/hvid.png')}/>),
                headerTitleAlign: 'center'
            })},

        Where: {screen: WhereScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle:(<Image style={{width: 275, height: 50,}} resizeMode="contain" source={require('../../assets/hvid.png')}/>),
                headerTitleAlign: 'center'
            })},
        Stats: {screen: StatsScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle:(<Image style={{width: 275, height: 50,}} resizeMode="contain" source={require('../../assets/hvid.png')}/>),
                headerTitleAlign: 'center'
            })},
        ChangeInfo: {screen: ChangeInfoScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle:(<Image style={{width: 275, height: 50,}} resizeMode="contain" source={require('../../assets/hvid.png')}/>),
                headerTitleAlign: 'center'
            })},

    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#32593c',
                headerTitleAlign: 'center'
            },

            headerTintColor: '#fff',

        },
    },
);
/*Skyd det afsted så App.js kan bruge componenet*/
export default HomeStack;
