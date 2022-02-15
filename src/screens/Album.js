import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Switch,
} from "react-native";
import { LinearGradient } from "react-native-svg";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text } from "react-native-design-utility";

import albums from "../mockdata/albums";
import { colors, gStyle, images } from "../../constants";
import TouchIcon from "../components/TouchIcon";
import TouchText from "../components/TouchText";
import LineItemSong from "../components/LineItemSong";
import { theme } from "../../constants/theme";

const { width } = Dimensions.get("window");
const stickyArray = [0];

let currentSongData = {
  album: "Swimming",
  artist: "Mac Miller",
  image: "swimming",
  length: 312,
  title: "So It Goes",
};

const styles = StyleSheet.create({
  blurview: {
    ...StyleSheet.absoluteFill,
    zIndex: 101,
  },
  header: {
    width: "100%",
    height: 89,
    position: "absolute",
    top: 0,
    zIndex: 100,
  },
  headerLinear: {
    height: 89,
    width: "100%",
  },
  headerTitle: {
    ...gStyle.textSpotifyBold16,
    color: colors.white,
    marginTop: 2,
    paddingHorizontal: 8,
    textAlign: "center",
    width: width - 100,
  },
  containerImage: {
    ...theme.shadows[2],
    zIndex: 0,
    elevation: 4,
  },
  image: {
    height: 148,
    marginBottom: 16,
    width: 148,
  },
  containerTitle: {
    marginTop: 0,
    zIndex: 0,
  },
  title: {
    ...gStyle.textSpotifyBold20,
    color: theme.color.white,
    marginBottom: theme.space.xs,
    paddingHorizontal: theme.space.md,
    textAlign: "center",
  },
  containerAlbum: {
    zIndex: 0,
  },
  albumInfo: {
    ...gStyle.textSpotify12,
    color: theme.color.greyLight,
    marginBottom: 48,
  },
  scroll: {
    paddingTop: 89,
  },
  containerStickyLinear: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  btn: {
    backgroundColor: theme.color.green,
    borderRadius: 25,
    height: 50,
    width: 220,
  },
  btnText: {
    ...gStyle.textSpotifyBold16,
    color: theme.color.white,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  shuffleWrapper: {
    alignItems: "center",
    height: 50,
    elevation: 5,
    ...theme.shadows[1],
  },
  songsWrapper: {
    alignItems: "center",
    backgroundColor: theme.color.black,
    minHeight: 540,
  },
  download: {
    ...gStyle.textSpotifyBold18,
    color: theme.color.white,
  },
});

const AlbumScreen = ({ navigation, route }) => {
  const { title } = route.params;

  const albumTitle = title;
  //   console.log(albumTitle);
  const [album, setAlbum] = useState([]);
  const [downloaded, setDownloaded] = useState(false);
  const [song, setSong] = useState(null);

  const scrollY = new Animated.Value(0);

  useEffect(() => {
    //   console.log(albumTitle);
    setAlbum(albums[albumTitle]);
    setSong(currentSongData.title);
    // console.log(album);
  }, []);

  const opacityHeader = scrollY.interpolate({
    inputRange: [230, 280],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const opacityShuffle = scrollY.interpolate({
    inputRange: [40, 80],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  function toggleDownloaded(val) {
    if (val === false) {
      Alert.alert(
        "Remove from Downloads?",
        "You won't be able to play this offline.",
        [
          { text: "Cancel" },
          {
            onPress: () => {
              setDownloaded(false);
            },
            text: "Remove",
          },
        ],
        { cancelable: false }
      );
    } else {
      setDownloaded(val);
    }
  }

  return (
    <Box f={1} bg="black">
      <BlurView style={styles.blurview} tint={"dark"} intensity={99} />

      <Box style={styles.header}>
        <Animated.View
          style={[styles.headerLinear, { opacity: opacityHeader }]}
        >
          <LinearGradient fill={album.backgroundColor} height={89} />
        </Animated.View>

        <Box
          w="100%"
          dir="row"
          align="center"
          justify="between"
          px="md"
          pt="md"
          position="absolute"
          top={0}
        >
          <TouchIcon
            icon={<Icon color={theme.color.white} name="chevron-left" />}
            onPress={() => console.warn("Pressed!")}
          />

          {/* <Animated.View style={{ opacity: opacityShuffle }}> */}
          <>
            <Text style={styles.headerTitle}>{album.title}</Text>
          </>
          <TouchIcon
            icon={<Icon color={colors.white} name="more-horizontal" />}
            onPress={() => console.warn("Also pressed!")}
          />
        </Box>
      </Box>

      <Box w="100%" align="center" pt={60} position="absolute">
        <Box w="100%" position="absolute" top={0}>
          <LinearGradient fill={album.backgroundColor} />
        </Box>

        <Box style={styles.containerImage}>
          <Image style={styles.image} source={images[album.image]} />
        </Box>

        <Box style={styles.containerTitle}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {album.title}
          </Text>
        </Box>

        <Box style={styles.containerAlbum}>
          <Text style={styles.albumInfo}>
            {`Album by ${album.artist} · ${album.released}`}
          </Text>
        </Box>
      </Box>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={stickyArray}
        style={styles.scroll}
      >
        <Box mt={194}>
          <Animated.View
            style={[styles.containerStickyLinear, { opacity: opacityShuffle }]}
          >
            <LinearGradient fill={colors.black20} height={50} />
          </Animated.View>

          <Box style={styles.shuffleWrapper}>
            <TouchText
              onPress={() => null}
              style={styles.btn}
              styleText={styles.btnText}
              text="Shuffle Play"
            />
          </Box>
        </Box>

        <Box style={styles.songsWrapper}>
          <Box w="100%" dir="row" align="center" justify="between" p="sm">
            <Text style={styles.download}>
              {downloaded ? "Downloaded" : "Download"}
            </Text>

            <Switch
              trackColor={colors.greySwitchBorder}
              onValueChange={(val) => toggleDownloaded(val)}
              value={downloaded}
            />
          </Box>

          {album.tracks &&
            album.tracks.map((track, index) => (
              <LineItemSong
                active={song === track.title}
                downloaded={downloaded}
                key={index.toString()}
                onPress={() => console.warn("Pressed as well!")}
                songData={{
                  album: album.title,
                  artist: album.artist,
                  image: album.image,
                  length: track.seconds,
                  title: track.title,
                }}
              />
            ))}
        </Box>
        <Box h={128} />
      </Animated.ScrollView>
    </Box>
  );
};

export default AlbumScreen;
