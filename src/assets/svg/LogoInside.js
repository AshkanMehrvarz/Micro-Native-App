import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={moderateScale(96)}
    height={moderateScale(121)}
    viewBox="0 0 96 121"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M78.972 6.678c1.518-5.394-3.716-8.584-8.497-5.178L3.741 49.041c-5.185 3.694-4.37 11.052 1.225 11.052h17.572v-.136h34.25L28.88 69.804l-12.303 43.705c-1.518 5.394 3.716 8.584 8.497 5.178l66.734-47.541c5.185-3.694 4.369-11.053-1.224-11.053h-26.65L78.972 6.678Z"
      fill="#fff"
    />
    <Path
      d="M70.475 1.5c4.78-3.406 10.015-.216 8.497 5.178L63.936 60.093h26.649c5.593 0 6.409 7.36 1.225 11.053l-66.735 47.541c-4.781 3.406-10.015.216-8.497-5.178l12.303-43.705 27.907-9.847h-34.25v.136H4.966c-5.594 0-6.41-7.358-1.225-11.052L70.475 1.5Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
