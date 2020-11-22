import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, ScrollView, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import {GlobalStyles} from "../../styles/GlobalStyles";



export default class WhyScreen extends Component {
    static navigationOptions= {
        title:'Why'
    }

    handleGoToHome = () => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.goBack();
    };

    render(){
        return (
            <View style={GlobalStyles.container}>
                <ScrollView>

                    <Text style={GlobalStyles.txt1}>You are probably asking yourself:{"\n"}Why do i need Muscle Hunter?</Text>

                    <Text style={GlobalStyles.txt}>In 2017 researchers discovered that activity with high intensity of the muscles, such as pullups, will more likely prevent you from developing type 2 diabetes, than going for a run. This is a big breakthrough in research, something everyone needs to know. Especially if we want to bend the curve of the growing amount of people with type 2 diabetes.</Text>

                    <Image source={require('../../assets/BendTheCurve.png')} style={{width: 370, height: 50}}/>
                    <Image source={require('../../assets/reduce.png')} style={{width: '100%', height: 140}}/>

                    <Text style={GlobalStyles.txt}>Muscle hunter is put into the world, to deliver a solution to this bad trend. This is the purpose behind the Muscle Hunter App, and if enough people get behind the training, we will be able to bend the curve. But not only  does the app let people know about the benefits of Muscular training, but it also tells you how you can train your muscles and where.</Text>

                    <Text style={GlobalStyles.txt}>Go back to home-Screen</Text>
                    <TouchableOpacity style={GlobalStyles.btn} onPress={this.handleGoToHome}>
                        <Text style={GlobalStyles.inner}>Go back</Text>
                    </TouchableOpacity>

                </ScrollView>


            </View>
        );
    };
}
