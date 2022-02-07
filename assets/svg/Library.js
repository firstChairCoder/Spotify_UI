import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../constants";

const LibrarySvg = ({ active, size }) => {
  const fill = active ? colors.black : colors.greyInactive;

  return (
    <Svg width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d={
          "M20.767 2.28h-12c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2Zm-2 5h-3v5.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.51V5.28h4v2Zm-16-1h2v14h14v2h-14c-1.1 0-2-.9-2-2v-14Z"
        }
        fill={fill}
      />
    </Svg>
  );
};

LibrarySvg.defaultProps = {
  active: false,
  size: 24,
};

LibrarySvg.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number,
};

export default LibrarySvg;
