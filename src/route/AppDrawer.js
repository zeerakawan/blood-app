import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import HomeStack from '../screens.js/screensconfig.js/HomeScreen';
import DonorFormStack from "../screens.js/screensconfig.js/DonorFormScreen";
import DonorProfileStack from "../screens.js/screensconfig.js/DonorProfileScreen";
import Drawers from "../components/Drawer.js/Index";
import DonorInn from "../components/DonorsInn";
import AcceptorForm from "../screens.js/AcceptorForm";

export const AppDrawerNavigator = createDrawerNavigator(
    {
      HomeStack,DonorFormStack,DonorInn,AcceptorForm
      // Home: { screen: HomeStack },
    //   HomeStack,HistoryStack ,ProfileStack,CardiologistStack,DermatologistStack,OrthopoedicsStack,NotificationsStack,MyAppointmentsStack,DoctorProfileStack
      // About: { screen: AboutStack },
      // Contact: { screen: ContactStack }
    },
    {
      contentComponent: () => (
        <View>
          <Drawers />
        </View>
      )
    }
  );