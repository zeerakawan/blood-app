import React from "react";
import { View, ActivityIndicator } from "react-native";


/**
|--------------------------------------------------
| Loadin 🔄 Component
|--------------------------------------------------
*/

export const Loading = () => {
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator color="#e93766" size="large" />
    </View>
  );
};