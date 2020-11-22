import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { createAppContainer } from 'react-navigation';
import SignInScreen from "./SignInScreen";
import Profile from "./Profile";
import { Entypo } from '@expo/vector-icons';
import {GlobalStyles} from "../../styles/GlobalStyles";

 export class HomeScreen extends Component {
    static navigationOptions= {
        title:'HomeScreen'
    }

    GoToWhy = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Why');
    };

    GoToHow = (route) =>{
        this.props.navigation.navigate('How')
    }

    GoToWhere = (route) =>{
        this.props.navigation.navigate('Where')
    }

    render() {
        return (
            <View style={GlobalStyles.container}>
                <ImageBackground source={require('../../assets/fitten.jpg')} style={GlobalStyles.image}>

                    <TouchableOpacity style={GlobalStyles.btn} onPress={this.GoToWhy}>
                        <Text style={GlobalStyles.inner}>Why Muscle Hunt?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={GlobalStyles.btn} onPress={this.GoToHow}>
                        <Text style={GlobalStyles.inner}>How do I Muscle Hunt?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={GlobalStyles.btn} onPress={this.GoToWhere}>
                        <Text style={GlobalStyles.inner}>Where do I Muscle Hunt?</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        );
    };;
}


const homeTab = createBottomTabNavigator(
    {
       HomeScreen:{
            screen: HomeScreen,
            navigationOptions:{
                tabBarLabel:"Home",
                tabBarOptions:{
                    activeTintColor: '#32593c'
                },
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name="home" size={24} color={tintColor} />
                ),
        },},
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel:"Profile",
                tabBarOptions:{
                    activeTintColor: '#32593c'
                },
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name="user" size={24} color={tintColor} />
                )
            },
        }
    }
)

export default createAppContainer(homeTab)

const styles = StyleSheet.create({
    container: {
        paddingTop:200,
        paddingBottom:200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
    },
    text: {
        fontSize: 20,
    },
    logo: {
        height: 128,
        width: 128,
    }
});
