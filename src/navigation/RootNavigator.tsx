import React from 'react';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const isLoggedIn = false;

const RootNavigator = () => {
  return <>{isLoggedIn ? <AppNavigator /> : <AuthNavigator />}</>;
};

export default RootNavigator;
