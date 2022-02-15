import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Entypo,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Box, Text } from "react-native-design-utility";

import { colors, gStyle } from "../../constants";
import { theme } from "../../constants/theme";

const color = theme.color.greyLight;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: theme.space.md,
    paddingVertical: 10,
    width: "100%",
  },
  title: {
    ...gStyle.textSpotify14,
    color: theme.color.white,
    marginLeft: theme.space.sm,
  },
});

const LineItemCategory = ({
  icon,
  onPress,
  title,
  disableRightSide,
  iconLibrary,
}) => {
  let iconDisplay;

  switch (iconLibrary) {
    default:
    case "Feather":
      iconDisplay = <Feather color={color} name={icon} size={24} />;
      break;
    case "Entypo":
      iconDisplay = <Entypo color={color} name={icon} size={24} />;
      break;
    case "MaterialIcons":
      iconDisplay = <MaterialIcons color={color} name={icon} size={24} />;
      break;
    case "MaterialCommunityIcons":
      iconDisplay = (
        <MaterialCommunityIcons color={color} name={icon} size={24} />
      );
      break;
    case "FontAwesome":
      iconDisplay = <FontAwesome color={color} name={icon} size={24} />;
      break;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}
    >
      <Box dir="row" align="center">
        {iconDisplay}
        <Text style={styles.title}>{title}</Text>
      </Box>

      {disableRightSide ? null : (
        <Box f={1} align="right">
          <Feather
            name={"chevron-right"}
            color={colors.greyInactive}
            size={20}
          />
        </Box>
      )}
    </TouchableOpacity>
  );
};

LineItemCategory.defaultProps = {
  disableRightSide: null,
  iconLibrary: "Feather",
};

LineItemCategory.propTypes = {
  // required
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,

  // optional
  disableRightSide: PropTypes.bool,
  iconLibrary: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default LineItemCategory;
