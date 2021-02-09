import React from 'react';
import {StyleSheet, View,Text,Button,FlatList} from 'react-native';
import { Loading } from "./Loading/Index";
import {firebase} from '../config/index';
import { connect } from "react-redux";
import { loginAction,signupAction,signoutAction,signUsers } from "../store/actions/auth.action";
import { withNavigation } from "react-navigation";
import Acceptor from "../components/AcceptorHome";
 class Home extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            isloading:false,
            show:false,
            data:[]
        };
      }
     
   componentDidMount(){
    this.setState({isloading:true})

    const entityRef = firebase.firestore().collection('donors')
          let userUid = firebase.auth().currentUser.uid
          const entityRefs = firebase.firestore().collection('Acceptors')
          entityRefs
            .where("userUid", "==", userUid)
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        this.setState({data:doc.data()})
                        this.props.signout(doc.data())
                        
                    });
                
                    
                  })
                  
                  entityRef
                  .onSnapshot(
                      querySnapshot => {
                          const newEntities = []
                          querySnapshot.forEach(doc => {
                              const entity = doc.data()
                              newEntities.push(entity)
                          });
                          this.props.login(newEntities)
                        //   console.log(newEntities);
                        })

  
    
    
    if(this.props.userStatus == "Acceptor"){this.setState({show:true})}
    
       setTimeout(()=>{
        this.setState({isloading:false})
       },3000)
       console.log(this.props.userStatus);
   }

    


   items = () =>{
    for(var i in this.state.asd)
    {
       for(var j in this.state.asd[i])
       {
           console.log(i);
        
         
       }
    //   console.log(i);
      }
  }

    render() {
        return <View style={styles.container}>
            {console.log(this.state.data)}
            {this.items}
        <Text>Home</Text>
       <Button title="Hit here" onPress={()=>this.props.navigation.navigate("DonorProfileStack")} />
      {/*{this.state.isloading && <Loading/>}  */}
      { this.state.show && <Acceptor/>} 

      {/* {console.log(this.props.credentials.)} */}
      {/* <FlatList
                        data={this.state.data}
                        renderItem={this.renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    /> */}
                    {/* {console.log(this.props.userStatus)} */}
        </View>
        
    }
}

const mapStateToProps = state => {
    return { userStatus: state.authReducer.userStatus,
        credentials: state.authReducer.credentials,
        all:state.authReducer.all
           };
  };

  
  const mapDispatchToProps = dispatch => {
    return {
        
        
        login: user => dispatch(loginAction({ user })),
      signup: userStatus => dispatch(signupAction({ userStatus })),
      signout:credentials => dispatch(signoutAction({ credentials })),
      
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (withNavigation(Home));


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    },
});