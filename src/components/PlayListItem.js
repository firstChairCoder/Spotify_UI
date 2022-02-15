import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-design-utility";

import { gStyle } from "../../constants";
import { theme } from "../../constants/theme";

const styles = StyleSheet.create({
  item: {
    borderRadius: 6,
    flex: 1,
    height: 98,
    marginBottom: theme.space.md,
    marginRight: theme.space.md,
    paddingLeft: theme.space.md / 2,
    paddingTop: theme.space.md / 2,
  },
  title: {
    ...gStyle.textSpotifyBold22,
    color: theme.color.white,
  },
});

const PlaylistItem = ({ bgColor, onPress, title }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={[styles.item, { backgroundColor: bgColor }]}
  >
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

PlaylistItem.propTypes = {
  // required
  bgColor: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default PlaylistItem;
