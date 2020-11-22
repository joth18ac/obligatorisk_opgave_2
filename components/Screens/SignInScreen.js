import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import {GlobalStyles} from "../../styles/GlobalStyles";
import * as NavigationActions from "react-navigation";



export default class SignInScreen extends Component {


    static navigationOptions= {
        title:'SignIn'
    }
    GoToHome = () =>{
        this.props.navigation.navigate('Home');
    };

    render(){
        return (
            <View style={GlobalStyles.container}>

                <Text style={{marginTop: 20, marginBottom: 10}}>Log in here if you already have an account:</Text>


                <TextInput
                    style={GlobalStyles.textInput}
                    value={"Email"}/>

                <TextInput
                    style={GlobalStyles.textInput}
                    value={"Password"}
                />


                <TouchableOpacity style={GlobalStyles.btn} onPress={this.GoToHome}>
                    <Text style={GlobalStyles.inner}>Log In</Text>
                </TouchableOpacity>

            </View>
        );
    };
}
