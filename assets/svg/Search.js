import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../constants";

const SearchSvg = ({ active, size }) => {
  const fill = active ? colors.black : colors.greyInactive;

  return (
    <Svg width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d={
          "M16.27 14.28h-.795l-.276-.273a6.47 6.47 0 0 0 1.568-4.226 6.5 6.5 0 1 0-6.5 6.5 6.47 6.47 0 0 0 4.225-1.566l.276.274v.792l4.998 4.99 1.491-1.49-4.988-5Zm-6.003 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
        }
        fill={fill}
      />
    </Svg>
  );
};

SearchSvg.defaultProps = {
  active: false,
  size: 24,
};

SearchSvg.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number,
};

export default SearchSvg;

// {
//   /* <Svg height={size} width={size} viewBox="0 0 512 512">
//       <Path d={dPath} fill={fill} fillRule="evenodd" />
//     </Svg> */
// }

// import * as React from "react"
// import Svg, { Path } from "react-native-svg"

// const SvgComponent = (props) => (
//   <Svg
//     width={25}
//     height={25}
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}
//   >
//     <Path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M16.27 14.28h-.795l-.276-.273a6.47 6.47 0 0 0 1.568-4.226 6.5 6.5 0 1 0-6.5 6.5 6.47 6.47 0 0 0 4.225-1.566l.276.274v.792l4.998 4.99 1.491-1.49-4.988-5Zm-6.003 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
//       fill="#A7A7A7"
//     />
//   </Svg>
// )

// export default SvgComponent
