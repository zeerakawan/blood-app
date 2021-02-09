import * as React from 'react';
import { View,Image,Text,Dimensions,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import styles from "./Styles/SignInStyles";


export default function SignUpAuth(props) {

    const onFooterLinkPress = () => {
        props.navigation.navigate('LoginScreen')
    }
    const { height, width } = Dimensions.get('window')
    return (
      <View style={styles.SignupAuth}>
           <Text style={styles.title}>Sign Up</Text>
        <Button mode="contained" style={[styles.button,styles.SignupAuth]} 
        onPress={()=>props.navigation.navigate('SignUp')}
        >
    Patient SignUp
  </Button>

  <Button mode="contained" style={styles.button} 
        onPress={()=>props.navigation.navigate('DonorSignUp')}
        >
    Doctor SignUp
  </Button>
  <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already have an Account <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign In</Text></Text>
                </View>                 
        
     
      </View>
    );
  }