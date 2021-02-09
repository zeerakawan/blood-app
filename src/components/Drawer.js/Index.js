import React, { Component } from "react";
import { withNavigation } from 'react-navigation';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
// import { signoutAction } from "../../store/actions/auth.action";
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawers = props => {
  console.log(props);
  if(props.userStatus == "donor"){
  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{flexDirection:"column",flex:1,backgroundColor:"#f4f4f4"}}> */}
                    {/* <View style={styles.bottomDrawerSectionContainer}> */}
                    {/* <Text style={styles.bottomDrawerSection}>Sign Out</Text> */}
                    {/* </View> */}
                    {/* </View> */}

                    <TouchableOpacity
        style={styles.item}
        onPress={() => {
          // props.signout();
          props.navigation.navigate("DoctorProfileStack");
        }}
      ><Icon 
      name="home-outline" 
      color="black"
      size={25}
      />
        <Text style={styles.text}>Donor Profile</Text>
      </TouchableOpacity>
      
                    <TouchableOpacity
        style={styles.item}
        onPress={() => {
          // props.signout();
          props.navigation.navigate("HomeStack");
        }}
      ><Icon 
      name="home-outline" 
      color="black"
      size={25}
      />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          // props.signout();
          props.navigation.navigate("DonorFormStack");
        }}
      ><Icon 
      name="account-outline" 
      color="black"
      size={25}
      />
        <Text style={styles.text}>Donor Form</Text>
      </TouchableOpacity>
      
      
      
      
      
      
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.signout();
          let times = 1
          axios.post('http://192.168.1.113:4000/patients/signout/'+props.user._id, times) 
                  .then(res => console.log(res.data));
          props.navigation.navigate("Auth");

        }}
      >
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>

      
      
    </View>
  );
}
// else{
  return (
    <View style={styles.container}>
         <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            {/* <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            /> */}
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
        style={styles.item}
        onPress={() => props.navigation.navigate("DoctorProfileStack") }
      >
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.signout();
          let times = 1
          axios.post('http://192.168.1.113:4000/patients/signout/'+props.user._id, times) 
                  .then(res => console.log(res.data));
          props.navigation.navigate("DonorForm");

        }}
      >
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          // props.signout();
          props.navigation.navigate("AcceptorForm");
        }}
      >
        <Text style={styles.text}>Acceptor Form</Text>
      </TouchableOpacity>
    </View>
  );
// }
};

const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight
    },
    item: {
      flexDirection:"row",
      marginVertical: 2.5,
      borderTopWidth: 1,
      borderTopColor:"#f4f4f4",
      padding: 10,
      paddingLeft: 10
    },
    text: {
      color: "#444",fontSize: 20,marginLeft:25
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
      // alignSelf:"flex-end",
      // verticalAlign:"center",
      flex:1
  },
  bottomDrawerSectionContainer:{
    alignItems:"center",
    flex:1
  }
  });

  

  const mapStateToProps = state => {
    return { 
      user: state.authReducer.user,
      userStatus: state.authReducer.userStatus
      // Data: state.authReducer.Data
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      signout: () => dispatch(signoutAction({ user:false })),
      signup: userStatus => dispatch(signupAction({ userStatus })),
    };
  };
  
  export default connect(
    mapStateToProps,mapDispatchToProps
  )(withNavigation(Drawers));
  
   