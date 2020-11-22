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

export default class ChangeInfoScreen extends Component {
    static navigationOptions= {
        title:'Profile'
    }

    handleGoToHome = () => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.goBack();
    };

    render() {
        return (
            <View style={GlobalStyles.container}>

                <Image source={require('../../assets/Profile.png')} style={{height: 80, width:80}}/>

                <TouchableOpacity style={GlobalStyles.btn} >
                    <Text style={GlobalStyles.inner}>Change Picture</Text>
                </TouchableOpacity>


                <TextInput
                    style={GlobalStyles.textInput}
                    value={"Name: John Doe"}/>

                <TextInput
                    style={GlobalStyles.textInput}
                    value={"Email: john@doe.com"}/>

                <TextInput
                    style={GlobalStyles.textInput}
                    value={"Old Password:"}/>

                <TextInput
                    style={GlobalStyles.textInput}
                    value={"New Password"}/>

                <TextInput
                    style={GlobalStyles.textInput}
                    value={"New Password again"}/>

                <TouchableOpacity style={GlobalStyles.btn} onPress={this.handleGoToHome}>
                    <Text style={GlobalStyles.inner}>Change Information</Text>
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
