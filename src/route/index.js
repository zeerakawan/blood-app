import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
// import Home from "../../../screens/home";
import { AppDrawerNavigator} from "./AppDrawer";
import LoginScreen from "../screens.js/SignIn";
import SignUpAuth from "../screens.js/SignUpStack";
import SignUp from "../screens.js/SignUp";
import DonorSignUp from "../screens.js/DonorSignup";
import DonorProfileStack from "../screens.js/DoctorProfile";
// import DonorInn from "../components/DonorsInn";
// import SignIn from "../../../screens/Auth/SignIn";
// import HomeStack from "../../../screens/Screensconfig/HomeScreen";
// import HistoryStack from "../../../screens/Screensconfig/HistoryScreen";

const AuthStack = createStackNavigator(
    {LoginScreen,DonorProfileStack,SignUpAuth,DonorSignUp},
    { headerMode: "none" }
  );

const AppNavigatorContainer = createSwitchNavigator({
    App:AppDrawerNavigator,
    Auth: AuthStack,
       
    
  },
  {
    initialRouteName: "Auth"
  });
  
  export default createAppContainer(AppNavigatorContainer);