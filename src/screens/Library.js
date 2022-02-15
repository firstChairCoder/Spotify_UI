import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Box } from "react-native-design-utility";

import Header from "../components/Header";
import LineItemCategory from "../components/LineItemCategory";
import yourLibrary from "../mockdata/yourLibraryMenu.json";

const styles = StyleSheet.create({
  headerWrapper: {
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
    <Box f={1} bg="black">
      <Box w="100%" position="absolute" top={0} style={styles.headerWrapper}>
        <Header title={"Your Library"} />
      </Box>

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
    </Box>
  );
};

export default LibraryScreen;
