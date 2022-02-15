import React from "react";
import PropTypes from "prop-types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../screens/Search";
import SearchSvg from "../../assets/svg/Search";

const Stack = createNativeStackNavigator();

const Icon = ({ focused }) => <SearchSvg active={focused} size={25} />;

Icon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

const StackSearch = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={"Search"}
        component={SearchScreen}
        // options={{ tabBarLabel: "Search", tabBarIcon: Icon }}
      />
    </Stack.Navigator>
  );
};

export default StackSearch;
