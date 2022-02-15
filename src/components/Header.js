import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "react-native-design-utility";

import { gStyle } from "../../constants";
import TouchIcon from "./TouchIcon";
import { theme } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: theme.space.sm,
    paddingHorizontal: theme.space.md,
    paddingTop: theme.space.md,
  },
  text: {
    ...gStyle.textSpotifyBold16,
    color: theme.color.white,
    textAlign: "center",
  },
});

const Header = ({ showBack, title }) => {
  const navigation = useNavigation();
  return (
    <BlurView tint="dark" intensity={95} style={styles.container}>
      {showBack && (
        <Box f={1} align="start">
          <TouchIcon
            icon={<Icon name={"chevron-left"} color={theme.color.white} />}
            onPress={() => navigation.navigate.goBack()}
          />
        </Box>
      )}

      <Box f={5} center>
        <Text style={styles.text}>{title}</Text>
      </Box>

      {showBack && <Box f={1} />}
    </BlurView>
  );
};

Header.defaultProps = {
  showBack: false,
};

Header.propTypes = {
  // required
  title: PropTypes.string.isRequired,

  // optional
  showBack: PropTypes.bool,
};

export default Header;
