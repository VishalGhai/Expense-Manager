import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import HomeScreen from './Screens/HomeScreen'
import TransactionScreen from './Screens/Transactions'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}

      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App
