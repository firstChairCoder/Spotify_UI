import * as React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../constants";

const HomeSvg = ({ active, size }) => {
  const fill = active ? colors.black : colors.greyInactive;
  // const dPath = active
  //   ? "M448 463.746H298.667V314.413h-85.334v149.333H64V148.318L256 36.572l192 110.984v316.19z"
  //   : "M256.274 60.84L84.324 166.237v276.826H193.27V293.73h126.958v149.333h107.994V165.476L256.274 60.84zm0-24.89l192.178 113.195v315.25H300V315.062h-86.501v149.333H64.095V150.161L256.274 35.95z";

  return (
    <Svg height={size} width={size}>
      <Path d={"M8.767 17.28v-6h4v6h5v-8h3l-10-9-10 9h3v8h5Z"} fill={fill} />
    </Svg>
  );
};

HomeSvg.defaultProps = {
  active: false,
  size: 24,
};

HomeSvg.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number,
};

export default HomeSvg;

// import * as React from "react"
// import Svg, { Path } from "react-native-svg"

// const SvgComponent = (props) => (
//   <Svg
//     width={21}
//     height={18}
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}
//   >
//     <Path d="M8.767 17.28v-6h4v6h5v-8h3l-10-9-10 9h3v8h5Z" fill="#fff" />
//   </Svg>
// )

// export default SvgComponent
