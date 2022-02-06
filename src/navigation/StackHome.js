import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home";
import AlbumScreen from "../screens/Album";

const Stack = createNativeStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"Album"} component={AlbumScreen} />
    </Stack.Navigator>
  );
};

export default StackHome;
