import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import store from './src/redux/store';
import {Provider} from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
    <GestureHandlerRootView>
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
    </Provider>
  );
};
export default App;
