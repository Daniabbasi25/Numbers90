/** @format */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  LoginScreen,
  MainScreen,
  SignupScreen,
  ForgetPassword,
  OtpScreen,
  PasswordChanged,
  ResetPasswordScreen,
  PreferencesScreen,
  ExpansionPackScreen
} from '@screens'
// import GameStack from './GameStack'
import { GameStack, UserBottomTabs } from '@navigations'
const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Singup' component={SignupScreen} />
      <Stack.Screen name='MainScreen' component={MainScreen} />
      <Stack.Screen
        name='ForgetPassword'
        component={ForgetPassword}
      />
      <Stack.Screen name='OtpScreen' component={OtpScreen} />
      <Stack.Screen
        name='PasswordChanged'
        component={PasswordChanged}
      />
      <Stack.Screen
        name='PreferencesScreen'
        component={PreferencesScreen}
      />
      <Stack.Screen
        name='ResetPasswordScreen'
        component={ResetPasswordScreen}
      />
      <Stack.Screen name='GameStack' component={GameStack} />
      <Stack.Screen name='BottomTab' component={UserBottomTabs} />
    </Stack.Navigator>
  )
}

export default AuthStack
