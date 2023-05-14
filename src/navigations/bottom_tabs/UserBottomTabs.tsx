import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  ExpansionPackScreen,
  HomeScreen,
  LeaderBoardScreen,
  LoginScreen,
  PreferencesScreen
} from '@screens'
import { Expansion, HomeIon, LeaderIon, Setting } from '@assets'
import { AppliedTheme } from '@constants'
const Tab = createBottomTabNavigator()

const theme = AppliedTheme()
const UserBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Leaderboard'
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.bottomTabIcon.active,
        tabBarInactiveTintColor: theme.bottomTabIcon.inactive
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIon fill={color} width={size} height={size} />
          )
        }}
      />

      <Tab.Screen
        name='Leaderboard'
        component={LeaderBoardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <LeaderIon fill={color} width={size} height={size} />
          )
        }}
      />
      <Tab.Screen
        name='Expansion'
        component={ExpansionPackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Expansion fill={color} width={size} height={size} />
          )
        }}
      />
      <Tab.Screen
        name='Settings'
        component={PreferencesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Setting fill={color} width={size} height={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default UserBottomTabs
