import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import HomeScreen from './Screens/HomeScreen'
import TransactionScreen from './Screens/Transactions'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LogInScreen from './Screens/LogInScreen'
import SignUpScreen from './Screens/SignUpScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="rgba(0,0,0,0)" transparent={true} translucent={true} />
      <Stack.Navigator
        initialRouteName="SignUpScreen"
        screenOptions={{
          headerShown: false
        }}

      >
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App
