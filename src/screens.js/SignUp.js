import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity,KeyboardAvoidingView ,View,Alert } from 'react-native'
import { Button } from 'react-native-paper';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './Styles/SignInStyles';

import { firebase } from '../config/index'
 function SignUp(props) {
   
   
    const onFooterLinkPress = () => {
        props.navigation.navigate('Registration')
    }

     const userSignUp =async () =>{
      let obj = {blood,name,status:"patient"}
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(async res=>{
            await firebase.database().ref('New/' + res.user.uid)
           .set(obj)

        // this.props.navigation.replace('Home')
      })
      .catch(error=>{
        console.log(error);
      })
    }

    

    return (
        <KeyboardAvoidingView style={styles.container}>

                <Text style={styles.title}>Acceptor SignUp </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => SetName(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
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
                />
                <RNPickerSelect
            onValueChange={(value) => setBlood(value)}
            items={[
                { label: 'A', value: 'A' },
                { label: 'B', value: 'B' },
                { label: 'AB', value: 'AB' },
                { label: 'O', value: 'O' },
                { label: 'A-', value: 'A-' },
                { label: 'B-', value: 'B-' },
                { label: 'AB-', value: 'AB-' },
                { label: 'O-', value: 'O-' },
                { label: 'A+', value: 'A+' },
                { label: 'B+', value: 'B+' },
                { label: 'AB+', value: 'AB+' },
                { label: 'O+', value: 'O+' },
            ]}
        />
            
                
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={userSignUp}>
                    <Text style={styles.buttonTitle}>TEST</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
         
        </KeyboardAvoidingView>
    )
}

export default SignUp;
  