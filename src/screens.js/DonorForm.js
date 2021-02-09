import React,{useState} from 'react';
import { Button,TextInput,Card,List } from 'react-native-paper';
import {View,StyleSheet,Text, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import {firebase} from '../config/index';
import RNPickerSelect from 'react-native-picker-select';
const DonorForm = () => {
  const [country,setCountry] = useState("");
  const [state,setState] = useState("");
  const [name,setName] = useState("");
  const [blood,setBlood] = useState("")
  const [address,setAddress] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const [age,setAge] = useState("");
  const [city,setCity] = useState("");
  const [contantNo,setContantNo] = useState("")
  const [maitalStatus,setMaritalStatus] = useState("")
  const [hospital,setHospital] = useState("")
 
 const submitClicked = () =>{
    let userUid = firebase.auth().currentUser.uid
    const usersRef = firebase.firestore().collection('donors')
    let  obj= {
      userUid,country,state,address,contactNumber,age,city,contantNo,maitalStatus,hospital,name,blood,status:"donor"
    }
    usersRef
    .doc(userUid)
    .set(obj)
    .then(() => {
        alert("Successfull");
    })
    .catch((error) => {
        alert(error)
    });
   

    // firebase.database().ref('Donors/' + )
    //        .update().then(res=>{
    //          alert("Successfull")
            
    //        })
           setCountry("");
           setState("");
           setAddress("");
           setContactNumber("");
           setAge("");
           setCity("");
           setMaritalStatus("");
           setHospital("");
           setName("")
           setBlood("")
 }
 
  

  return(
  <View style={styles.drawerContent}>


  
  
  {/* ----------------------------------------------------------------------------------------- */}

  {/* ------------------------------- Input View -------------------------------------------- */}
  <TextInput
        label='Name'
        mode="underline"
        style={{flexBasis:"45%"}}
        value={name}
        onChangeText={text => setName(text)}
      />
  <TextInput
        label='State'
        mode="underline"
        style={{flexBasis:"45%"}}
        value={state}
        onChangeText={text => setState(text)}
      />
  <TextInput
        label='Contry'
        mode="underline"
        style={{flexBasis:"45%"}}
        value={country}
        onChangeText={text => setCountry(text)}
      />
      <TextInput
        label='Marital Status'
        mode="underline"
        style={{flexBasis:"45%"}}
        value={maitalStatus}
        onChangeText={text => setMaritalStatus(text)}
      />
      <TextInput
        label='Address'
        mode="underline"
        style={{flexBasis:"45%"}}
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <TextInput
        label='Contact Number'
        mode="underline"
        style={{flexBasis:"45%"}}
        value={contactNumber}
        onChangeText={text => setContactNumber(text)}
      />
      <TextInput
        label='Age'
        mode="underline"
        style={{flexBasis:"45%"}}
        value={age}
        onChangeText={text => setAge(text)}
      />
         <TextInput
        label='City'
        mode="underline"
        style={{flexBasis:"45%"}}
        value={city}
        onChangeText={text => setCity(text)}
      />



<TextInput
        label='Hospital'
        mode="underline"
        style={{flexBasis:"45%"}}
        value={hospital}
        onChangeText={text => setHospital(text)}
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
    

      {/* ------------------------------- Submit Button View -------------------------------------------- */}
  <View style={{flexBasis:"80%",justifyContent:"space-around"}}>
      <Button icon="camera" mode="outlined" onPress={submitClicked}>
        SUBMIT
      </Button>
  </View>
  {/* ----------------------------------------------------------------------------------------- */}
      {/* <Card><List.Item title="No Cities"></List.Item></Card> */}
  </View>
  )
}

const styles = StyleSheet.create({
    drawerContent: {
      flexDirection:"row",
      flexWrap:'wrap',
      justifyContent:"space-evenly",
      // margin:20,
      // paddingHorizontal:20,
      // flex: 1,
      width:"100%",
      // backgroundColor:"red"
    },
    
  });

export default DonorForm;