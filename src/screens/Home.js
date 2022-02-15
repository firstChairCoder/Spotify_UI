import React from "react";
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Box } from "react-native-design-utility";

import heavyRotation from "../mockdata/heavyRotation.json";
import jumpBackIn from "../mockdata/jumpBackIn.json";
import recentlyPlayed from "../mockdata/recentlyPlayed.json";
import { gStyle, images } from "../../constants";
import { theme } from "../../constants/theme";

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
    color: theme.color.white,
    paddingBottom: 6,
    textAlign: "center",
  },
  tagline: {
    ...gStyle.textSpotify12,
    color: theme.color.greyLight,
    paddingBottom: 6,
    textAlign: "center",
  },
  containerContent: {
    paddingLeft: theme.space.sm,
  },
  item: {
    marginRight: theme.space.sm,
    width: 148,
  },
  image: {
    backgroundColor: theme.color.greyLight,
    height: 148,
    width: 148,
  },
  title: {
    ...gStyle.textSpotifyBold12,
    color: theme.color.white,
    marginTop: 4,
    textAlign: "center",
  },
});

const AlbumsHorizontal = ({ data, heading, tagline }) => {
  const navigation = useNavigation();

  return (
    <Box w="100%" mb={32}>
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
            onPress={() => navigation.navigate("Album", { title: item.title })}
            style={styles.item}
          >
            <>
              {item.image && (
                <Image source={images[item.image]} style={styles.image} />
              )}
            </>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </Box>
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
        <Box h={128} />

        <AlbumsHorizontal data={recentlyPlayed} heading="Recently played" />

        <AlbumsHorizontal
          data={heavyRotation}
          heading="Your heavy rotation"
          tagline="The music you've had on repeat this month."
        />

        <AlbumsHorizontal
          data={jumpBackIn}
          heading="Jump back in"
          tagline="Your top listens from the past few months."
        />
      </Animated.ScrollView>
    </>
  );
};

export default HomeScreen;
