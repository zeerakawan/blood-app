import React, { useState,useEffect } from 'react'
import { Image, Text, TouchableOpacity, View,TextInput,KeyboardAvoidingView } from 'react-native'
import { Button } from 'react-native-paper';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './Styles/SignInStyles';
import { connect } from "react-redux";
import { firebase } from "../config/index";
import RNPickerSelect from 'react-native-picker-select';
import { loginAction,signupAction,signidAction } from "../store/actions/auth.action";
// import { useAuth } from "../../contexts/AuthContexts";

 function LoginScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, SetName] = useState('')
    const [blood, setBlood] = useState('')
    var provider = new firebase.auth.GoogleAuthProvider();

    // const { handleLogin } = useAuth();
    const onFooterLinkPress = () => {
        props.navigation.navigate('SignUpAuth')
    }

    async function userSignIn(){

    firebase.auth()
   
   .signInWithPopup(provider).then( function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
       firebase.database().ref('Donors/' + result.user.uid)
           
           props.signup("donor")
      props.navigation.navigate('App')
      console.log(token)
      console.log(user)
   }).catch(function(error) {
     console.log(error);
		
      console.log(error.code)
      console.log(error.message)
   });
     }

     const test = () =>{
       
    firebase.auth()
   
    .signInWithPopup(provider).then( function(result) {
       var token = result.credential.accessToken;
       var user = result.user;
       
       
            props.signup("Acceptor")
       props.navigation.navigate('App')
       console.log(token)
       console.log(user)
    }).catch(function(error) {
      console.log(error);
         
       console.log(error.code)
       console.log(error.message)
    });

    

    
     }
    

    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                /> */}
                <Text style={styles.title}>BloodApp SignIn </Text>
                {/* <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                /> */}
                <Button  
                mode="contained"
                onPress={()=>userSignIn()}
                style={styles.button}
                >
                   Donor SignIn
                </Button>
                
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => test()}>
                    <Text style={styles.buttonTitle}>Acceptor SignIn</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            {/* </KeyboardAwareScrollView> */}
        </KeyboardAvoidingView>
    )
}

const mapStateToProps = state => {
    return { user: state.authReducer.user,
             
           };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      signup: userStatus => dispatch(signupAction({ userStatus })),
      credentials: credentials => dispatch(signidAction({ credentials })),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps)
  (LoginScreen);
   