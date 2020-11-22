import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput
} from 'react-native';
import {GlobalStyles} from "../../styles/GlobalStyles";

export default class StatsScreen extends Component {
    static navigationOptions= {
        title:'Profile'
    }

    handleGoToWelcome = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Welcome');
    };
    handleGoToStats = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Stats');
    };

    render() {
        return (
            <View style={GlobalStyles.container}>


                <Image source={require('../../assets/Stats.png')} style={GlobalStyles.image}/>




            </View>

        );
    };;
}

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
});
