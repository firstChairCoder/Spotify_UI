import React from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Box, Text } from "react-native-design-utility";
import { FontAwesome as Icon } from "@expo/vector-icons";

import PlaylistItem from "../components/PlayListItem";
import TouchIcon from "../components/TouchIcon";
import topGenres from "../mockdata/searchTopGenres.json";
import browseAll from "../mockdata/searchBrowseAll.json";
import SearchSvg from "../../assets/svg/Search";
import { colors, gStyle } from "../../constants";
import { theme } from "../../constants/theme";

const { width } = Dimensions.get("window");
const searchStart = width - 48;
const searchEnd = searchStart - 40;

const styles = StyleSheet.create({
  placeholder: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.color.white,
    borderRadius: theme.radius.xs,
    paddingLeft: theme.space.sm,
    paddingVertical: theme.space.sm,
  },
  placeholderText: {
    ...gStyle.textSpotify16,
  },
  sectionLabel: {
    ...gStyle.textSpotifyBold18,
    color: theme.color.white,
    marginBottom: theme.space.md,
    marginLeft: theme.space.md,
    marginTop: theme.space.sm,
  },
});

const Search = () => {
  const scrollY = new Animated.Value(0);

  const opacity = scrollY.interpolate({
    inputRange: [0, 48],
    outputRange: [searchStart, searchEnd],
    extrapolate: "clamp",
  });

  return (
    <>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        style={gStyle.container}
      >
        <Box h={88} />
        {/* <View style={styles.searchBarWrapper}> */}
        <Box px="md" pb="sm" pt="md" bg="black">
          <Animated.View style={{ width: opacity }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => null}
              style={styles.placeholder}
            >
              <Box mr="xs">
                <SearchSvg />
              </Box>
              <Text style={styles.placeholderText}>
                Artists, songs or podcasts
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </Box>

        <Text style={styles.sectionLabel}>Your top genres</Text>
        <Box f={1} dir="row" flexWrap="wrap" ml="md">
          {Object.keys(topGenres).map((index) => {
            const item = topGenres[index];

            return (
              <Box key={item.id} w="50%">
                <PlaylistItem
                  bgColor={item.color}
                  onPress={() => null}
                  title={item.title}
                />
              </Box>
            );
          })}
        </Box>

        <Text style={styles.sectionLabel}>Browse all</Text>
        <Box f={1} dir="row" flexWrap="wrap" ml="md">
          {Object.keys(browseAll).map((index) => {
            const item = browseAll[index];

            return (
              <Box key={item.id} w="50%">
                <PlaylistItem
                  bgColor={item.color}
                  onPress={() => null}
                  title={item.title}
                />
              </Box>
            );
          })}
        </Box>
      </Animated.ScrollView>

      <Box center w={28} h={28} position="absolute" top={74} right={24}>
        <TouchIcon
          icon={<Icon name={"microphone"} color={colors.white} />}
          onPress={() => null}
        />
      </Box>
    </>
  );
};

export default Search;
