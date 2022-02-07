import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LibraryScreen from "../screens/Library";

const Stack = createNativeStackNavigator();

const StackLibrary = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={"Library"}
        component={LibraryScreen}
        // options={{ tabBarLabel: "Search", tabBarIcon: Icon }}
      />
    </Stack.Navigator>
  );
};

export default StackLibrary;
