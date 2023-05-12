/** @format */

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { GameScreen, LoginScreen, MainScreen } from '@screens'
const Stack = createStackNavigator()

const GameStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {/* <Stack.Screen name='MainScreen' component={MainScreen} /> */}
      <Stack.Screen name='Game' component={GameScreen} />
    </Stack.Navigator>
  )
}

export default GameStack
