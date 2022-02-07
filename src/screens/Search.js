import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";

import PlaylistItem from "../components/PlayListItem";
import { colors, gStyle } from "../../constants";

import topGenres from "../mockdata/searchTopGenres.json";
import browseAll from "../mockdata/searchBrowseAll.json";
import SearchSvg from "../../assets/svg/Search";

import TouchIcon from "../components/TouchIcon";

const { width } = Dimensions.get("window");
const searchStart = width - 48;
const searchEnd = searchStart - 40;

const styles = StyleSheet.create({
  searchBarWrapper: {
    ...gStyle.pH3,
    backgroundColor: colors.blackBg,
    paddingBottom: 16,
    paddingTop: 24,
  },
  placeholder: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 6,
    flexDirection: "row",
    paddingLeft: 16,
    paddingVertical: 16,
  },
  placeholderText: {
    ...gStyle.textSpotify16,
    color: colors.blackBg,
  },
  sectionLabel: {
    ...gStyle.textSpotifyBold18,
    color: colors.white,
    marginBottom: 24,
    marginLeft: 24,
    marginTop: 16,
  },
  rowWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 24,
  },
  columnWrapper: {
    width: "50%",
  },
  iconRight: {
    alignItems: "center",
    height: 28,
    justifyContent: "center",
    position: "absolute",
    right: 24,
    top: 78,
    width: 28,
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
        <View style={gStyle.spacer11} />
        <View style={styles.searchBarWrapper}>
          <Animated.View style={{ width: opacity }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => null}
              style={styles.placeholder}
            >
              <View style={gStyle.mR1}>
                <SearchSvg />
              </View>
              <Text style={styles.placeholderText}>
                Artists, songs or podcasts
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Text style={styles.sectionLabel}>Your top genres</Text>
        <View style={styles.rowWrapper}>
          {Object.keys(topGenres).map((index) => {
            const item = topGenres[index];

            return (
              <View key={item.id} style={styles.columnWrapper}>
                <PlaylistItem
                  bgColor={item.color}
                  onPress={() => null}
                  title={item.title}
                />
              </View>
            );
          })}
        </View>

        <Text style={styles.sectionLabel}>Browse all</Text>
        <View style={styles.rowWrapper}>
          {Object.keys(browseAll).map((index) => {
            const item = browseAll[index];

            return (
              <View key={item.id} style={styles.columnWrapper}>
                <PlaylistItem
                  bgColor={item.color}
                  onPress={() => null}
                  title={item.title}
                />
              </View>
            );
          })}
        </View>
      </Animated.ScrollView>

      <View style={styles.iconRight}>
        <TouchIcon
          icon={<Icon name={"microphone"} color={colors.white} />}
          onPress={() => null}
        />
      </View>
    </>
  );
};

export default Search;
