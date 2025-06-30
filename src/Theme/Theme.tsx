// prettier-ignore
import React, { ReactNode } from 'react';
import { ImageBackground, StatusBar, StyleSheet, ImageSourcePropType } from 'react-native';

const backgroundImage: ImageSourcePropType = require('../assets/images/image2.jpg');

interface ThemeProps {
  children: ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background} blurRadius={100}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default Theme;
