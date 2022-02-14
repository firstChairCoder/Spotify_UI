import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { func } from "./constants";
import { UtilityThemeProvider } from "react-native-design-utility";

import RootStack from "./src/navigation/Stack";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading
        onError={() => console.warn("An error occured on loading!")}
        onFinish={() => setLoading(false)}
        startAsync={func.loadAssetsAsync}
      />
    );
  }

  return (
    <UtilityThemeProvider>
      <StatusBar style="auto" />
      <RootStack />
    </UtilityThemeProvider>
  );
}
