import React, { ReactNode } from 'react';
import { ImageBackground, StatusBar, ImageSourcePropType } from 'react-native';

const backgroundImage: ImageSourcePropType = require('../assets/images/image2.jpg');

interface ThemeProps {
  children: ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ImageBackground source={backgroundImage} className="flex-1" blurRadius={100}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {children}
    </ImageBackground>
  );
};

export default Theme;
