import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={moderateScale(14)}
    height={moderateScale(18)}
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7 3.5V0L2.625 4.375 7 8.75v-3.5a5.25 5.25 0 1 1-5.25 5.25H0a7 7 0 1 0 7-7Z"
      fill="#404CCF"
    />
  </Svg>
);

export default SvgComponent;
