import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Header from "../components/Header";
import LineItemCategory from "../components/LineItemCategory";
import { gStyle } from "../../constants";
import yourLibrary from "../mockdata/yourLibraryMenu.json";

const styles = StyleSheet.create({
  headerWrapper: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10,
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 48,
    alignItems: "flex-end",
  },
});

const LibraryScreen = () => {
  return (
    <View style={gStyle.container}>
      <View style={styles.headerWrapper}>
        <Header title={"Your Library"} />
      </View>

      <FlatList
        contentContainerStyle={styles.contentWrapper}
        data={yourLibrary}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <LineItemCategory
            icon={item.icon}
            onPress={() => null}
            title={item.title}
          />
        )}
      />
    </View>
  );
};

export default LibraryScreen;
