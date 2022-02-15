import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import { Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const TouchIcon = ({ icon, iconSize, onPress, style }) => (
  <Pressable
    activeOpacity={0.7}
    onPress={onPress}
    hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
    style={[styles.icon, style]}
  >
    {cloneElement(icon, { size: iconSize })}
  </Pressable>
);

TouchIcon.defaultProps = {
  iconSize: 24,
  style: {},
};

TouchIcon.propTypes = {
  // required
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,

  // optional
  iconSize: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
  ]),
};

export default TouchIcon;
