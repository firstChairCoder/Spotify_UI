import { BlurView } from "expo-blur";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
  Switch,
  Alert,
} from "react-native";
import { LinearGradient } from "react-native-svg";
import { Feather as Icon } from "@expo/vector-icons";

import albums from "../mockdata/albums";
import { gStyle, colors, images } from "../../constants";
import TouchIcon from "../components/TouchIcon";
import TouchText from "../components/TouchText";
import LineItemSong from "../components/LineItemSong";

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
    height: 89,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 100,
  },
  headerLinear: {
    height: 89,
    width: "100%",
  },
  headerWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 24,
    position: "absolute",
    top: 0,
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
  containerFixed: {
    alignItems: "center",
    paddingTop: 60,
    position: "absolute",
    width: "100%",
  },
  containerLinear: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 0,
  },
  containerImage: {
    shadowColor: colors.black,
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    zIndex: 0,
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
    color: colors.white,
    marginBottom: 8,
    paddingHorizontal: 24,
    textAlign: "center",
  },
  containerAlbum: {
    zIndex: 0,
  },
  albumInfo: {
    ...gStyle.textSpotify12,
    color: colors.greyInactive,
    marginBottom: 48,
  },
  stickyWrapper: {
    marginTop: 194,
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
    backgroundColor: colors.brandPrimary,
    borderRadius: 25,
    height: 50,
    width: 220,
  },
  btnText: {
    ...gStyle.textSpotifyBold16,
    color: colors.white,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  shuffleWrapper: {
    alignItems: "center",
    height: 50,
    shadowColor: colors.blackBg,
    shadowOffset: { height: -10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  songsWrapper: {
    alignItems: "center",
    backgroundColor: colors.blackBg,
    minHeight: 540,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    width: "100%",
  },
  download: {
    ...gStyle.textSpotifyBold18,
    color: colors.white,
  },
});

const AlbumScreen = ({ navigation, route }) => {
  const { title } = route.params;

  const albumTitle = title;
  //   console.log(albumTitle);
  const [album, setAlbum] = useState([]);
  const [downloaded, setDownloaded] = useState(false);
  const [song, setSong] = useState(null);
  //   const [title, setTitle] useState(title)

  const scrollY = new Animated.Value(0);

  useEffect(() => {
    //   const albumTitle = navigation.getParam("title", "Extraordinary Machine");
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
    <View style={gStyle.container}>
      <BlurView style={styles.blurview} tint={"dark"} intensity={99} />

      <View style={styles.header}>
        <Animated.View
          style={[styles.headerLinear, { opacity: opacityHeader }]}
        >
          <LinearGradient fill={album.backgroundColor} height={89} />
        </Animated.View>

        <View style={styles.headerWrapper}>
          <TouchIcon
            icon={<Icon color={colors.white} name="chevron-left" />}
            onPress={() => console.warn("Pressed!")}
          />

          {/* <Animated.View style={{ opacity: opacityShuffle }}> */}
          <View>
            <Text style={styles.headerTitle}>{album.title}</Text>
          </View>
          <TouchIcon
            icon={<Icon color={colors.white} name="more-horizontal" />}
            onPress={() => console.warn("Also pressed!")}
          />
        </View>
      </View>

      <View style={styles.containerFixed}>
        <View style={styles.containerLinear}>
          <LinearGradient fill={album.backgroundColor} />
        </View>
        <View style={styles.containerImage}>
          <Image source={images[album.image]} style={styles.image} />
        </View>
        <View style={styles.containerTitle}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {album.title}
          </Text>
        </View>
        <View style={styles.containerAlbum}>
          <Text style={styles.albumInfo}>
            {`Album by ${album.artist} · ${album.released}`}
          </Text>
        </View>
      </View>

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
        <View style={styles.stickyWrapper}>
          <Animated.View
            style={[styles.containerStickyLinear, { opacity: opacityShuffle }]}
          >
            <LinearGradient fill={colors.black20} height={50} />
          </Animated.View>

          <View style={styles.shuffleWrapper}>
            <TouchText
              onPress={() => null}
              style={styles.btn}
              styleText={styles.btnText}
              text="Shuffle Play"
            />
          </View>
        </View>

        <View style={styles.songsWrapper}>
          <View style={styles.row}>
            <Text style={styles.download}>
              {downloaded ? "Downloaded" : "Download"}
            </Text>

            <Switch
              trackColor={colors.greySwitchBorder}
              onValueChange={(val) => toggleDownloaded(val)}
              value={downloaded}
            />
          </View>

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
        </View>
        <View style={gStyle.spacer16} />
      </Animated.ScrollView>
    </View>
  );
};

export default AlbumScreen;
