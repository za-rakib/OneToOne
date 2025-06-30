import React, { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const FaceIdIcon = ({ color = 'white', ...props }: SvgProps) => {
  return (
    <Svg width="100" height="100" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9 10.5H9.01M15 10.5H15.01M9.5 16.5C10.333 17.167 11.5 17.5 12 17.5C12.5 17.5 13.667 17.167 14.5 16.5M17 3H19.4C20.2802 3 21 3.71979 21 4.6V7M7 3H4.6C3.71979 3 3 3.71979 3 4.6V7M3 17V19.4C3 20.2802 3.71979 21 4.6 21H7M21 17V19.4C21 20.2802 20.2802 21 19.4 21H17"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default memo(FaceIdIcon);
