import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={1.5 * moderateScale(10)}
    height={1.5 * moderateScale(18)}
    viewBox="0 0 10 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m7.773 1.355.006-.007c.38-.394 1-.403 1.407.006a.991.991 0 0 1-.014 1.407l-.005.005-5.9 5.88L2.912 9l.355.354 5.9 5.88.005.005a.99.99 0 0 1-.712 1.701.907.907 0 0 1-.674-.281l-.007-.007-.006-.007-6.98-6.939a.998.998 0 0 1 0-1.412l6.98-6.94Z"
      fill="#404CCF"
    />
  </Svg>
);

export default SvgComponent;
