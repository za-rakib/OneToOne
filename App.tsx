import {SafeAreaView} from 'react-native'
import React from 'react'
import Theme from './src/Theme/Theme'
import RootNavigator from './src/navigation/RootNavigator'

const App = () => {
  return (
    <Theme>
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigator/>
      </SafeAreaView>
    </Theme>
  )
}
export default App