import { LOGIN, SIGNUP, SIGNOUT } from "../constants/index";

/**
|--------------------------------------------------
| 🔑 Auth Reducer with sweet 😗 initial state
|--------------------------------------------------
*/

const initialState = {
  
  
  status:false,Data:null,uid:"",token:{},user:[],credentials:{},all:{}
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.user
      };
    case SIGNUP:
      return { ...state, user: payload.user, userStatus: payload.userStatus };
    case SIGNOUT:
      return { ...state, credentials:payload.credentials };
        case "ACCEPTORS":
          return {...state, all:payload.all}
    default:
      return state;
  }
};