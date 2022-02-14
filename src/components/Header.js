import * as React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import { Feather as Icon } from "@expo/vector-icons";
import { colors, gStyle } from "../../constants";

// components
import TouchIcon from "./TouchIcon";

const Header = ({ navigation, showBack, title }) => (
  <BlurView tint="dark" intensity={95} style={styles.container}>
    {showBack && (
      <View style={styles.left}>
        <TouchIcon
          icon={<Icon color={colors.white} name="chevron-left" />}
          onPress={() => console.warn("TODO goBack!")}
        />
      </View>
    )}

    <View style={styles.containerText}>
      <Text style={styles.text}>{title}</Text>
    </View>

    {showBack && <View style={gStyle.flex1} />}
  </BlurView>
);

Header.defaultProps = {
  showBack: false,
};

Header.propTypes = {
  // required
  //   navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,

  // optional
  showBack: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  containerText: {
    ...gStyle.flex5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    ...gStyle.textSpotifyBold16,
    color: colors.white,
    textAlign: "center",
  },
  left: {
    ...gStyle.flex1,
    alignItems: "flex-start",
  },
});

export default Header;
