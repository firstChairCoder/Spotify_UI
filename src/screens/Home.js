import React, { useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";

// components
// import AlbumsHorizontal from "../components/AlbumsHorizontal";

// mock data
import heavyRotation from "../mockdata/heavyRotation.json";
// import jumpBackIn from "../mockdata/jumpBackIn.json";
// import recentlyPlayed from "../mockdata/recentlyPlayed.json";

import { gStyle, colors, images } from "../../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingTop: 36,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10,
  },
  heading: {
    ...gStyle.textSpotifyBold18,
    color: colors.white,
    paddingBottom: 6,
    textAlign: "center",
  },
  tagline: {
    ...gStyle.textSpotify12,
    color: colors.greyInactive,
    paddingBottom: 6,
    textAlign: "center",
  },
  containerContent: {
    paddingLeft: 16,
  },
  item: {
    marginRight: 16,
    width: 148,
  },
  image: {
    backgroundColor: colors.greyLight,
    height: 148,
    width: 148,
  },
  title: {
    ...gStyle.textSpotifyBold12,
    color: colors.white,
    marginTop: 4,
    textAlign: "center",
  },
});

const AlbumsHorizontal = ({ data, heading, tagline }) => {
  return (
    <View style={{ marginBottom: 32, width: "100%" }}>
      {heading && <Text style={styles.heading}>{heading}</Text>}
      {tagline && <Text style={styles.tagline}>{tagline}</Text>}

      <FlatList
        contentContainerStyle={styles.containerContent}
        data={data}
        horizontal
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={gStyle.activeOpacity}
            hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
            onPress={() => console.warn("Pressed!")}
            style={styles.item}
          >
            <View style={styles.image}>
              {item.image && (
                <Image source={images[item.image]} style={styles.image} />
              )}
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const HomeScreen = () => {
  const scrollY = new Animated.Value(0);
  const opacityOut = scrollY.interpolate({
    inputRange: [0, 88],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <>
      <Animated.View style={[styles.container, { opacity: opacityOut }]}>
        <Icon name={"cog"} color={"#FFF"} size={24} />
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={gStyle.container}
      >
        <View style={gStyle.spacer16} />

        <AlbumsHorizontal
          data={heavyRotation}
          heading="Your heavy rotation"
          tagline="The music you've had on repeat this month."
        />
      </Animated.ScrollView>
    </>
  );
};

export default HomeScreen;
