/** @format */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle
} from 'react-native'
import React, { Children, FC } from 'react'
import { AppliedTheme } from '@constants'
import {
  BackLeftEclipsLight,
  BackRightEclipsLight,
  LeftRectange,
  RectangleRight
} from '@assets'
import { StatusBar } from 'expo-status-bar'
const theme = AppliedTheme()
interface Props {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}
const FullScreenPrimary: FC<Props> = props => {
  const { children, style } = props
  return (
    <SafeAreaView style={[styles.screenContainer, style]}>
      <StatusBar style='auto' />
      {children}

      <View style={styles.leftEclips}>
        <BackLeftEclipsLight />
      </View>
      <View style={styles.leftRectangle}>
        <LeftRectange />
      </View>
      <View style={styles.rightRectangle}>
        <RectangleRight />
      </View>
      <View style={styles.rightEclips}>
        <BackRightEclipsLight />
      </View>
    </SafeAreaView>
  )
}

export default FullScreenPrimary

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: theme.background.primary
  },
  rightEclips: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  leftEclips: {
    position: 'absolute',
    left: 0,
    top: 60
  },
  leftRectangle: {
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  rightRectangle: {
    position: 'absolute',
    right: 0,
    top: 10
  }
})
