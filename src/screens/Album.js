import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Album = () => {
  return (
    <View style={styles.container}>
      <Text>Album</Text>
    </View>
  );
};

export default Album;
