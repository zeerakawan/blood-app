import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "../Home";
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  console.log();
    return <Home />;
}  
  
  
   const HomeStack = createStackNavigator(
    {
      HomeScreen: { screen: HomeScreen }
    },
    {
        defaultNavigationOptions: ({navigation}) => {
        return {
          headerTitle: "Home",
          headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
          drawerLockMode: "locked-closed",
          title: "Home",
          headerTitleAlign: 'center',
          drawerLabel: "Home",
          headerLeft: () => (
                        <Icon.Button name="ios-menu" size={25} backgroundColor="#aaaaaa" onPress={() => navigation.openDrawer()}></Icon.Button>
                    )
          // ...headerStyles(navigation)
        };
      }
    }
  );

  export default HomeStack;