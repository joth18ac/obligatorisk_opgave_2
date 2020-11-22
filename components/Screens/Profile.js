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

export default class Profile extends Component {
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

    handleGoToChangeInfo = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('ChangeInfo');
    };

    render() {
        return (
            <View style={GlobalStyles.container}>

                <Image source={require('../../assets/Profile.png')} style={GlobalStyles.image1}/>

                <TouchableOpacity style={GlobalStyles.btn} onPress={this.handleGoToStats}>
                    <Text style={GlobalStyles.inner}>Check your Workout stats</Text>
                </TouchableOpacity>


                <TouchableOpacity style={GlobalStyles.btn} onPress={this.handleGoToChangeInfo}>
                    <Text style={GlobalStyles.inner}>Change User information</Text>
                </TouchableOpacity>

                <TextInput
                    style={GlobalStyles.textInput}
                    value={"Name: John Doe"}/>

                <TextInput
                    style={GlobalStyles.textInput}
                    value={"Email: john@doe.com"}/>


                <TouchableOpacity style={GlobalStyles.btn} onPress={this.handleGoToWelcome}>
                    <Text style={GlobalStyles.inner}>Log Out</Text>
                </TouchableOpacity>



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
