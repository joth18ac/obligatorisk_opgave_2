import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import {GlobalStyles} from "../../styles/GlobalStyles";

export default class HowScreen extends Component {
    static navigationOptions= {
        title:'How'
    }
    handleGoToHome = () => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.goBack();
    };

    render(){
        return (
            <View style={GlobalStyles.container}>
                <TouchableOpacity style={GlobalStyles.btn} onPress={this.handleGoToHome}>
                    <Text style={GlobalStyles.inner}>Go back</Text>
                </TouchableOpacity>
            </View>
        );
    };
}
