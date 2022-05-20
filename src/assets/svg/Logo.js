import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={props.size * moderateScale(170)}
    height={props.size * moderateScale(42)}
    viewBox="0 0 170 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M51.86 28.638h11.952v-3.6h-7.704v-13.56H51.86v17.16ZM70.893 26.238c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72Zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504ZM84.324 32.886c1.824 0 3.432-.408 4.512-1.368.984-.888 1.632-2.232 1.632-4.08V16.35h-3.744v1.32h-.048c-.72-1.032-1.824-1.68-3.456-1.68-3.048 0-5.16 2.544-5.16 6.144 0 3.768 2.568 5.832 5.328 5.832 1.488 0 2.424-.6 3.144-1.416h.096v1.224c0 1.488-.696 2.352-2.352 2.352-1.296 0-1.944-.552-2.16-1.2h-3.792c.384 2.568 2.616 3.96 6 3.96Zm-.024-7.824c-1.464 0-2.424-1.2-2.424-3.048 0-1.872.96-3.072 2.424-3.072 1.632 0 2.496 1.392 2.496 3.048 0 1.728-.792 3.072-2.496 3.072ZM98.166 26.238c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72Zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504ZM105.884 28.638h3.912V16.35h-3.912v12.288Zm0-13.992h3.912v-3.168h-3.912v3.168ZM111.494 32.694h3.912v-5.328h.048c.768 1.032 1.896 1.656 3.48 1.656 3.216 0 5.352-2.544 5.352-6.528 0-3.696-1.992-6.504-5.256-6.504-1.68 0-2.88.744-3.72 1.848h-.072V16.35h-3.744v16.344Zm6.432-6.696c-1.68 0-2.64-1.368-2.64-3.36 0-1.992.864-3.504 2.568-3.504 1.68 0 2.472 1.392 2.472 3.504 0 2.088-.912 3.36-2.4 3.36ZM130.655 29.022c3.216 0 5.592-1.392 5.592-4.08 0-3.144-2.544-3.696-4.704-4.056-1.56-.288-2.952-.408-2.952-1.272 0-.768.744-1.128 1.704-1.128 1.08 0 1.824.336 1.968 1.44h3.6c-.192-2.424-2.064-3.936-5.544-3.936-2.904 0-5.304 1.344-5.304 3.936 0 2.88 2.28 3.456 4.416 3.816 1.632.288 3.12.408 3.12 1.512 0 .792-.744 1.224-1.92 1.224-1.296 0-2.112-.6-2.256-1.824h-3.696c.12 2.712 2.376 4.368 5.976 4.368ZM141.561 28.998c1.704 0 2.784-.672 3.672-1.872h.072v1.512h3.744V16.35h-3.912v6.864c0 1.464-.816 2.472-2.16 2.472-1.248 0-1.848-.744-1.848-2.088V16.35h-3.888v8.064c0 2.736 1.488 4.584 4.32 4.584ZM150.75 28.638h3.912V21.75c0-1.464.72-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912V21.75c0-1.464.696-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912v-7.992c0-2.76-1.392-4.656-4.176-4.656-1.584 0-2.904.672-3.864 2.16h-.048c-.624-1.32-1.848-2.16-3.456-2.16-1.776 0-2.952.84-3.72 2.112h-.072V16.35h-3.744v12.288Z"
        fill="#404CCF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.684 40.638c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Zm6.24-30.683c.303-1.079-.744-1.717-1.7-1.036l-13.347 9.509c-1.037.738-.874 2.21.245 2.21h3.515v-.027h6.85l-5.582 1.97-2.46 8.74c-.304 1.079.743 1.717 1.7 1.036l13.346-9.508c1.037-.74.874-2.211-.245-2.211h-5.33l3.007-10.683Z"
        fill="#404CCF"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(0 .5)" d="M0 0h170v41H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
