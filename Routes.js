import * as React from 'react';
import HomeScreenStack from './screens/Home';
import SignUpAuth from "./screens/SignUpAuth";
import { DrawerContent } from "./component/CustomDrawerComponent";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HistorySettingStack from "./screens/HistorySettings";
import SignUp from './screens/SignUp';
import PatientSignIn from './component/PatientSignIn';
import DoctorSignIn from "./component/DoctorSignIn";
import PatientSignUpStack from "./screens/SignUp";
import DoctorSignUpStack from "./screens/Doctor/DoctorSignUp";
import HistoryStack from "./screens/History";
import Cardiologist from "./screens/Cardiologist";
import { NavigationContainer } from '@react-navigation/native';
// import Cardiologist from "./screens/Cardiologist";
import urologist from "./screens/Kidney Specialist";
import Orthopoedics from "./screens/BoneSpecialist";
import Dermatologist from "./screens/SkinSpecialist";
import SignIn from './screens/SignIn';
import { Credentials } from "./App";
import { connect } from "react-redux";
import { loginAction, signupAction, } from "./store/actions/authactions";
import { myContext } from "./App";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// -------------- STATUS CHANGE REDUCER ------------------------------------
// const isSTATUSReducer = (state, action) => {
//   switch(action.type) {
//     case 'SET_USER':
//       return action.payload;
//     default:
//       throw new Error();
//   }
// };

//  -------------------------------------------------------------------------

function Routes(props) {
    // const [datas,setDatas] = false
 
    // React.useEffect(()=>{
        
       
    // },[])
    const dates = props.user
  console.log(props.user);

  const state = {
    routes: [{ name: 'HomeScreenStack' }, { name: 'HistoryStack' }],
  };
//     console.log("userStatus===",props.userStatus)  
//     if(props.userStatus == "patient"){
//     set
// }
// else{ datas=false}
  return (
    
        <NavigationContainer>
        {/* {console.log(isSignedIn)} */}
      {  props.userStatus ? (
         <Drawer.Navigator initialRouteName={false?"HistoryStack":"HomeScreenStack"} drawerContent={(props) => <DrawerContent  statea={dates} {...props} />}>
         <Drawer.Screen name="HomeScreenStack" component={HomeScreenStack} />
         <Drawer.Screen name="HistoryStack" component={HistoryStack} />
         <Drawer.Screen name="HistorySettingStack" component={HistorySettingStack} />
         <Drawer.Screen name="Cardiologist" component={Cardiologist} />
         <Drawer.Screen name="urologist" component={urologist}/>
         <Drawer.Screen name="Orthopoedics" component={Orthopoedics} />
         <Drawer.Screen name="Dermatologist" component={Dermatologist} />
         
       </Drawer.Navigator>
      // No token found, user isn't signed in
      // 
    ) : (
      // User is signed in
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="PatientSignIn" component={PatientSignIn} />
        <Stack.Screen name="PatientSignUpStack" component={PatientSignUpStack} />
        <Stack.Screen name="SignUpAuth" component={SignUpAuth} />
        <Stack.Screen name="DoctorSignUpStack" component={DoctorSignUpStack} />
        <Stack.Screen name="DoctorSignIn" component={DoctorSignIn} />
      </Stack.Navigator>
      
    )}
      
      
        </NavigationContainer>
    
  );
}

const mapStateToProps = state => {
    return { 
           user:state.authReducer.user,
           userStatus:state.authReducer.userStatus,
    };
  };
  
                  // : 3,
                  //  : "the Book Title",
                  //  : 33000
  
  const mapDispatchToProps = dispatch => {
    return {
      login: (userStatus) => dispatch(loginAction({ userStatus })),
      signup: userStatus => dispatch(signupAction({ userStatus })),
      postBooks: (id,title,price) => dispatch(postBooks({id,title,price}))
    };
  };
  
  export const EmailAutheses = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes);
  
  export default EmailAutheses;
