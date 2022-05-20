import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={moderateScale(14)}
    height={moderateScale(20)}
    viewBox="0 0 14 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.312 19.943a.715.715 0 0 1-.429-.764l1.3-8.465H.733a.715.715 0 0 1-.714-.878L2.162.55A.714.714 0 0 1 2.876 0h7.143a.714.714 0 0 1 .7.872L9.483 6.429h3.393a.714.714 0 0 1 .643.4.714.714 0 0 1-.079.714L4.155 19.686A.715.715 0 0 1 3.59 20a.78.78 0 0 1-.279-.057ZM7.698 7.857 9.126 1.43H3.448L1.633 9.286h4.222l-1.136 7.343 6.729-8.772h-3.75Z"
      fill="#404CCF"
    />
  </Svg>
);

export default SvgComponent;
