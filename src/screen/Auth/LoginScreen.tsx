import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Theme from '../../Theme/Theme';

const LoginScreen = () => {
  return (
    <Theme>
      <View style={styles.mainWrapper}>
        <View style={styles.secondaryWrapper}>
          <Text className="text-red-900">Welcome to One to One</Text>
        </View>
      </View>
    </Theme>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryWrapper: {
    width: 400, // = scale(100)
    height: 400, // = verticalScale(200)
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
