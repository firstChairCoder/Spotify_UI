import React from "react";
import PropTypes from "prop-types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// navigation
// import TabNavigation from "./TabNavigation";
import StackHome from "./StackHome";
import StackSearch from "./StackSearch";

import HomeSvg from "../../assets/svg/Home";

// screens
// import ModalMusicPlayer from "../screens/ModalMusicPlayer";
// import ModalMoreOptions from "../screens/ModalMoreOptions";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Icon = ({ focused }) => <HomeSvg active={focused} />;

Icon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

// function BottomTab() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name={"Home"} component={StackHome} />
//       <Tab.Screen name={"Search"} component={StackSearch} />
//     </Tab.Navigator>
//   );
// }

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={"Main"}
          component={StackHome}
          options={{ tabBarLabel: "Home", tabBarIcon: Icon }}
        />
        <Tab.Screen name={"Search"} component={StackSearch} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

// export default App;
