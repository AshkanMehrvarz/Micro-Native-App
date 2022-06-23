import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={moderateScale(175)}
    height={moderateScale(175)}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 200c55.229 0 100-44.772 100-100S155.229 0 100 0 0 44.772 0 100s44.771 100 100 100Zm31.197-153.416c1.518-5.394-3.716-8.583-8.497-5.178L55.966 88.948C50.78 92.64 51.596 100 57.19 100h17.572v-.136h34.25l-27.907 9.846-12.302 43.706c-1.519 5.394 3.715 8.583 8.496 5.177l66.735-47.541c5.184-3.693 4.368-11.052-1.225-11.052h-26.649l15.036-53.416Z"
      fill="#fff"
    />
    <Path
      d="M122.7 41.407c4.781-3.406 10.015-.217 8.497 5.177L116.161 100h26.649c5.593 0 6.409 7.359 1.225 11.052L77.3 158.593c-4.78 3.406-10.015.217-8.496-5.177l12.302-43.706 27.907-9.846h-34.25V100H57.191c-5.594 0-6.41-7.359-1.225-11.052L122.7 41.407Z"
      fill="#404CCF"
    />
  </Svg>
);

export default SvgComponent;
