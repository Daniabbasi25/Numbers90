/** @format */

import { FC } from 'react'
import { Text, View } from 'react-native'
import { PrimaryButton, FullScreenPrimary } from '@components'
import styles from './styles'

const MainScreen: FC = () => {
  return (
    <FullScreenPrimary style={styles.screenContainer}>
      <View style={styles.textView}>
        <Text style={styles.HeadingText}>Mathly</Text>
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton title='Play' />
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton title='How to Play' />
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton title='Preferences' />
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton title='Upgrade' />
      </View>
    </FullScreenPrimary>
  )
}
export default MainScreen
