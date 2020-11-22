import React, { Component } from 'react'
import { View, Text, StyleSheet,Button, ImageBackground,TouchableOpacity } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';

import {GlobalStyles} from "../../styles/GlobalStyles";
import NavigationActions from "react-navigation";

export default class WelcomeScreen extends Component {
    static navigationOptions= {
        title:' Welcome',

    }

    GoToWhy = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Why');
    };

    GoToSignIn = (route) => {
        this.props.navigation.navigate('SignIn');
    };

    GoToCreateAccount = (route) => {
        this.props.navigation.navigate('CreateAccount');
    };

    GoToHome = () =>{
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            <View style={GlobalStyles.container}>
                <ImageBackground source={require('../../assets/2291.jpg')} style={GlobalStyles.image}>

                    <TouchableOpacity style={GlobalStyles.btn} onPress={this.GoToWhy}>
                        <Text style={GlobalStyles.inner}>Why Muscle Hunt?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={GlobalStyles.btn} onPress={this.GoToSignIn}>
                        <Text style={GlobalStyles.inner}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={GlobalStyles.btn} onPress={this.GoToCreateAccount}>
                        <Text style={GlobalStyles.inner}>Create Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={GlobalStyles.btn} onPress={this.GoToHome}>
                        <Text style={GlobalStyles.inner}>Bypass Login</Text>
                    </TouchableOpacity>

                </ImageBackground>

            </View>
        );
    };
}

