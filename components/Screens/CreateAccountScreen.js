import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import {GlobalStyles} from "../../styles/GlobalStyles";



export default class CreateAccountScreen extends Component {
    static navigationOptions= {
        title:'CreateAccount'
    }
    handleGoToWelcome = () => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.goBack();
    };


    render(){
        return (
            <View style={GlobalStyles.container}>

                <Text style={{marginTop: 20, marginBottom: 10}}>Create your account:</Text>

                <TextInput
                    style={GlobalStyles.textInput}
                    value={"Name"}/>

                <TextInput
                    style={GlobalStyles.textInput}
                    value={"Email"}/>

                <TextInput
                    style={GlobalStyles.textInput}
                    value={"Password"}
                />

                <TextInput
                    style={GlobalStyles.textInput}
                    value={"Password again"}
                />

                <TouchableOpacity style={GlobalStyles.btn} onPress={this.handleGoToWelcome}>
                    <Text style={GlobalStyles.inner}>Create Account</Text>
                </TouchableOpacity>

            </View>
        );
    };
}

