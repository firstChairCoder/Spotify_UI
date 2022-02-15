import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { UtilityThemeProvider } from "react-native-design-utility";

import { func } from "./constants";
import RootStack from "./src/navigation/Stack";
import { theme } from "./constants/theme";

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
    <UtilityThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <RootStack />
    </UtilityThemeProvider>
  );
}
