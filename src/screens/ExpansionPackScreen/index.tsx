/** @format */

import { View, Text } from 'react-native'
import { FC } from 'react'
import styles from './styles'
import { FullScreenPrimary, CarouselCard } from '@components'
import { images } from '@assets'
const ExpansionPackScreen: FC = () => {
  return (
    <FullScreenPrimary style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.Heading}>Upgrade Your Membership</Text>
        <Text style={styles.textStyle}>
          Choose the plan best for you
        </Text>
      </View>
      <View style={styles.carousalContainer}>
        <CarouselCard />
      </View>
    </FullScreenPrimary>
  )
}
export default ExpansionPackScreen
