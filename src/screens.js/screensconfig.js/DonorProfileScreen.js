import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import DonorProfile from "../DoctorProfile";
import Icon from 'react-native-vector-icons/Ionicons';

function DonorProfilecreen() {
  console.log();
    return <DonorProfile />;
}  
  
  
   const DonorProfileStack = createStackNavigator(
    {
        DonorFormScreen: { screen: DonorProfilecreen }
    },
    {
        defaultNavigationOptions: ({navigation}) => {
        return {
          headerTitle: "Donor Profile",
          headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
          drawerLockMode: "locked-closed",
          title: "DonorForm",
          headerTitleAlign: 'center',
          drawerLabel: "DonorForm",
          headerLeft: () => (
                        <Icon.Button name="ios-menu" size={25} backgroundColor="#aaaaaa" onPress={() => navigation.openDrawer()}></Icon.Button>
                    )
          // ...headerStyles(navigation)
        };
      }
    }
  );

  export default DonorProfileStack;