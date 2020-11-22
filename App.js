import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from "./components/Navigation/RootStack";
import React, { Component } from 'react'
import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import WelcomeScreen from "./components/Screens/WelcomeScreen";

const DrawerNavigator = createDrawerNavigator({
  "Root":{
    screen: RootStack
  }
});

const AppNav = createAppContainer(DrawerNavigator)

export default class App extends React.Component {
  render() {
    return (
        <AppNav/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
