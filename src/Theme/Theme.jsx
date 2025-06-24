import React from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';

const backgroundImage = require('../assets/image1.jpg');

const Theme = ({ children }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      blurRadius={100}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default Theme;
