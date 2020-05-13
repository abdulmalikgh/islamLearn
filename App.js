import "react-native-gesture-handler";
import React from "react";
import { View, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AppEntry from "./components/views/AppEntry";
import Login from "./components/views/Login";
import SignUp from "./components/views/SignUp";
import Learn from "./components/sections/Learn";

const TabNavigation = createBottomTabNavigator({
  Learn: {
    screen: Learn,
  },
});

const StackNavigation = createStackNavigator(
  {
    AppEntry: {
      screen: AppEntry,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Log In",
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: "Sign Up",
      },
    },
    Dashboard: {
      screen: TabNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#15C39A",
    },
  }
);

const AppNavigation = createAppContainer(StackNavigation);
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigation />
    </View>
  );
}
