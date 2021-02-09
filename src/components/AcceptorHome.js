import React, { useState,useEffect } from 'react'
import { Image, Text, TouchableOpacity, View,TextInput,KeyboardAvoidingView,FlatList } from 'react-native'
import { Button } from 'react-native-paper';
import { connect } from "react-redux";
import { firebase } from "../config/index";
import RNPickerSelect from 'react-native-picker-select';
import { loginAction,signupAction,signUsers } from "../store/actions/auth.action";
import { withNavigation } from "react-navigation";


    class Acceptor extends React.Component {
        constructor(props) {
            super(props);
         
            this.state = {
                row:[]
            };
          }

           renderEntity = ({item, index}) => {
       
            return (
              <View>
              <Text>{item.name}</Text>
             
              </View>
              
            )
        }
         
       componentDidMount(){
        let userUid = firebase.auth().currentUser.uid
       }

       show = (userUid,blood) =>{
         console.log(userUid);
         console.log(blood);
         let temp = {userUid,blood}
         this.props.signUser(temp)
         

       }

       renderEntity = ({item, index}) => {
        return (
          <View style={{flexDirection:"row"}}>
              {/* <View style={{marginLeft:15, flexDirection:'column',alignSelf:"center"}}> */}
                
                  <Text style={{
 backgroundColor: '#2f363c',
 height: 50,
 fontSize: 26,
 padding: 2.5,
 color: 'white',
 borderBottomWidth: 0.5,
 flexBasis:"45%"
}}>{item.name }</Text>
   <Button
   style={{
     marginLeft: "5px",
    backgroundColor: '#2f363c',
    height: 50,
    fontSize: 26,
    padding: 0,
    color: 'white',
    borderBottomWidth: 0.5,
    flexBasis:"45%"
   }}
   onPress={()=>this.props.navigation.navigate("DonorInn")}
   >{item.blood}</Button>
        
          {/* </View> */}
</View>
        )
    }


    render() {
    return (
        <View>
             <FlatList
                        data={this.props.user}
                        renderItem={this.renderEntity}
                        // keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    /> 
                    
        </View>
    )
}
 }

const mapStateToProps = state => {
    return { user: state.authReducer.user,
        all:state.authReducer.all
             
           };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      signup: userStatus => dispatch(signupAction({ userStatus })),
      signUser: all => dispatch(signUsers({ all })),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (withNavigation(Acceptor));
   