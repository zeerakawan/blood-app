import React from 'react';
import CreateAppContainer from "./src/route/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/index";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Loading } from "./src/screens.js/Loading/Index";
// import AuthProvider from "./src/contexts/AuthContexts";
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#788eec',
    accent: '#f1c40f',
    background: '#fff',
  }
};


export default function App() {
 
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
        <CreateAppContainer/>
        
      </PersistGate>
      </Provider>
   
    );
  
}

