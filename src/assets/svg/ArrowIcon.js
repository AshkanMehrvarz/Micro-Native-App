import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={2 * moderateScale(15)}
    height={2 * moderateScale(17)}
    viewBox="0 0 15 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.506.91c.386-.194.791-.29 1.216-.29.444.019 1.274.31 1.602.443 2.163.85 6.294 3.628 7.877 5.326.27.27.56.598.637.675.328.425.502.946.502 1.507 0 .5-.155 1.002-.464 1.407a7.955 7.955 0 0 1-.54.617l-.116.116c-1.622 1.756-5.656 4.4-7.703 5.249 0 .019-1.216.52-1.795.54h-.077a2.43 2.43 0 0 1-2.143-1.312c-.232-.444-.444-1.737-.463-1.756-.174-1.158-.29-2.931-.29-4.882 0-2.045.116-3.898.328-5.036 0-.02.213-1.061.348-1.409A2.503 2.503 0 0 1 2.505.91Z"
      fill="#404CCF"
    />
  </Svg>
);

export default SvgComponent;
