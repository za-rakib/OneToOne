import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Login from './src/components/Login'
import Theme from './src/Theme/Theme'

const App = () => {
  return (
    <Theme>
      <SafeAreaView style={{ flex: 1 }}>
        <Login />
      </SafeAreaView>
    </Theme>
  )
}
export default App