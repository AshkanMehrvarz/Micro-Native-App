import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={moderateScale(25)}
    height={moderateScale(25)}
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18.325 20.804c2.031 2.031 3.718 3.015 5.209 3.38 1.502.369 2.74.092 3.82-.258.24-.078.475-.16.701-.24l.076-.026c.252-.088.492-.172.73-.245.474-.146.915-.246 1.354-.258.84-.022 1.78.276 2.978 1.472.606.606 1.18 1.152 1.706 1.652l.028.027c.535.509 1.015.966 1.435 1.397.85.87 1.395 1.577 1.626 2.277.22.664.176 1.381-.31 2.33-.493.966-1.43 2.14-2.962 3.674a3.39 3.39 0 0 0-.207.2l-.01.01-.01.01c-.082.084-.174.178-.283.282a5.526 5.526 0 0 1-.908.706c-.761.47-1.892.896-3.533.797-3.311-.2-8.773-2.547-17.427-11.2C3.68 18.138 1.332 12.676 1.13 9.363c-.1-1.64.324-2.772.795-3.534.237-.385.49-.682.705-.908.104-.11.199-.202.282-.284l.01-.01.01-.01c.066-.063.142-.138.2-.206 1.537-1.535 2.714-2.475 3.681-2.97.95-.485 1.666-.528 2.328-.308.7.232 1.404.779 2.274 1.63.43.42.887.9 1.396 1.436l.007.007c.505.532 1.058 1.113 1.672 1.728 1.197 1.197 1.495 2.137 1.474 2.978-.011.44-.11.88-.256 1.355-.073.237-.156.478-.244.73l-.027.076c-.079.226-.161.462-.239.702-.349 1.08-.625 2.318-.256 3.82.366 1.492 1.351 3.178 3.383 5.209Z"
      stroke="#404CCF"
    />
  </Svg>
);

export default SvgComponent;