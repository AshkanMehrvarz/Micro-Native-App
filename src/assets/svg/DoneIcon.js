import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg
    width={2 * moderateScale(18)}
    height={2 * moderateScale(13)}
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M14.866.51c.68-.68 1.8-.68 2.48 0 .68.7.68 1.8 0 2.48l-9.5 9.5c-.34.34-.78.5-1.24.5-.44 0-.88-.16-1.22-.5L.626 7.75c-.68-.7-.68-1.8 0-2.48.68-.68 1.8-.68 2.48 0l1.75 1.75 1.75 1.75 8.26-8.26Z"
      fill="#404CCF"
    />
  </Svg>
);

export default SvgComponent;
