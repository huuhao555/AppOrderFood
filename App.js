import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import StackNavigation from './src/nagavition'
import { NavigationContainer } from '@react-navigation/native'
import ProductDetailScreen from './src/screens/tabs/ProductDetailScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
})
export default App