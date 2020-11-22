import {StyleSheet} from "react-native";

//Jeg laver global styling her, så jeg altid kan bruge dette og undgår unødvendig kode

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    antDesign : {
        margin: 17,
    },

    text: {
        fontSize: 20,
    },

    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    },
    btn: {
        marginTop: 10,
        marginBottom: 30,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor: '#32593c',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#32593c',
        alignItems: 'center',
        width: 200,
    },
    inner: {
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        marginTop: -150,
        width: '100%',
        height: '40%',
        resizeMode: 'cover', // or 'stretch'
    },
    textInput:{
        marginTop: 10,
        marginBottom: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#32593c',
        alignItems: 'center',
        width: 200,
    },
    container1: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },txt: {
        textAlign: "center",
        color: "black",
        margin: 5,
    },
    txt1: {
        textAlign: "center",
        color: "black",
        margin: 5,
        fontSize: 20
    },
    image1: {
        height: '30%',
        width: '30%'
    },



})
