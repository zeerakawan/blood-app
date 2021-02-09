import axios from "axios";
import React, { useState,useEffect,useRef } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    FlatList,
    Platform 
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
    Switch,
    Button
  } from 'react-native-paper';
  import { withNavigation } from "react-navigation";
  import { connect } from "react-redux";
  import { firebase } from "../config/index";
  

  
    class DonorProfile extends React.Component {
      constructor(props) {
          super(props);
       
          this.state = {
              isloading:false,
              show:false,
              data:[]
          };
        }
  
        componentDidMount(){
          const entityRef = firebase.firestore().collection('donors')
          let userUid = firebase.auth().currentUser.uid
      
          entityRef
            .where("userUid", "==", userUid)
            // .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        // entity.id = doc.id
                        newEntities.push(entity)
                    });
                    // console.log(newEntities);
                    this.setState({data:newEntities})
                  })

        }
       

    
         renderEntity = ({item, index}) => {
          return (
            <View style={styles.userInfoSection}>
            <View style={{marginTop: 15,alignSelf:"center"}}>
                <Avatar.Image 
                    source={{
                        uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FAvatar-Last-Airbender-Season-1%2Fdp%2FB000GFD4C0&psig=AOvVaw1ru-EOBLulAu1m3EBrWT0O&ust=1610710839511000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiIydGrm-4CFQAAAAAdAAAAABAD'
                    }}
                    size={250}
                />
             
                <View style={{marginLeft:15, flexDirection:'column',alignSelf:"center"}}>
                    <Title style={styles.title}>{item.name}</Title>
                    <Caption style={styles.caption}>{item.city}</Caption>
                    <Text style={{
   // backgroundColor: '#2f363c',
   height: 50,
   fontSize: 26,
   padding: 10,
   color: 'white',
   borderBottomWidth: 0.5,
  
 }}>Group ::{item.blood }</Text>
        <Text style={{
   // backgroundColor: '#2f363c',
   height: 50,
   fontSize: 26,
   padding: 10,
   color: 'white',
   borderBottomWidth: 0.5,
   
 }}>Status ::{item.status }</Text>
                </View>
            </View>
</View>
          )
      }

      

   
    render(){
      return(
    <View style={styles.container}>    
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
const mapStateToProps = state => ({
  uid: state.authReducer.uid,
  user: state.authReducer.user
});

  export default connect(
    mapStateToProps,
    
  )(withNavigation(DonorProfile));
  const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight
    },
    item: {
      marginVertical: 2.5,
      backgroundColor: "#ccc",
      padding: 20,
      paddingLeft: 10
    },
    text: {
      color: "#444"
    },
    userInfoSection: {
      alignItems:"center",
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      alignSelf:"center"
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
        flex:1
    },
  bottomDrawerSectionContainer:{
    alignItems:"center",
    flex:1
  }
  });
