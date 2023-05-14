import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'
import styles from './styles'
import { GameKeyboard } from '@components'
import { images } from '@assets'
import { getHeight, getWidth } from '@helpers'
const GameScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* left Numbers */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>4/10</Text>
        <View style={styles.row}>
          <Image
            source={images.timer}
            style={{
              width: getWidth(10),
              height: getHeight(5),

              resizeMode: 'center'
            }}
          />
          <Text style={styles.headerText}>30</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.row,
            styles.buttonHint,
            {
              justifyContent: 'space-between'
            }
          ]}
        >
          <Image
            source={images.hint}
            style={{
              width: getWidth(5),
              height: getHeight(4),
              // backgroundColor: 'red',
              resizeMode: 'center'
            }}
          />
          <Text style={styles.headerText}>5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gameContent}>
        <Text style={styles.mainNumber}>567</Text>
        <View style={styles.row}>
          {/* <Text style={[styles.calculationtext, {
            color:
          }]}>567</Text> */}
        </View>
      </View>
      <View style={styles.gameBox}>
        <GameKeyboard />
      </View>
    </SafeAreaView>
  )
}

export default GameScreen
