import React from "react";
import PropTypes from "prop-types";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackHome from "./StackHome";
import StackSearch from "./StackSearch";
import StackLibrary from "./StackLibrary";
import HomeSvg from "../../assets/svg/Home";
import SearchSvg from "../../assets/svg/Search";
import LibrarySvg from "../../assets/svg/Library";

// screens
// import ModalMusicPlayer from "../screens/ModalMusicPlayer";
// import ModalMoreOptions from "../screens/ModalMoreOptions";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Icon = ({ focused }) => <HomeSvg active={focused} />;
const Icon2 = ({ focused }) => <SearchSvg active={focused} />;
const Icon3 = ({ focused }) => <LibrarySvg active={focused} />;

Icon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

Icon2.propTypes = {
  focused: PropTypes.bool.isRequired,
};

Icon3.propTypes = {
  focused: PropTypes.bool.isRequired,
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name={"Main"}
          component={StackHome}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: Icon,
            tabBarIconStyle: {
              paddingTop: -15,
            },
            tabBarLabelStyle: {
              paddingBottom: 5,
            },
          }}
        />
        <Tab.Screen
          name={"Searcher"}
          component={StackSearch}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: Icon2,
            tabBarIconStyle: {
              paddingTop: -15,
            },
            tabBarLabelStyle: {
              paddingBottom: 5,
            },
          }}
        />
        <Tab.Screen
          name={"Libraries"}
          component={StackLibrary}
          options={{
            tabBarLabel: "Your Library",
            tabBarIcon: Icon3,
            tabBarIconStyle: {
              paddingTop: -15,
            },
            tabBarLabelStyle: {
              paddingBottom: 5,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
