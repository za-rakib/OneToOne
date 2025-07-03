import React from 'react';
import { AuthStackParamList } from './types';
import LoginScreen from '../screen/Auth/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtpandFaceScreen from '../screen/Auth/OtpandFaceScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="otpandFace" component={OtpandFaceScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
