/** @format */

import { AppliedTheme } from '@constants'
import { getHeight, getWidth } from '@helpers'
import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
const theme = AppliedTheme()
const styles = StyleSheet.create({
  cardView: {
    flexDirection: 'row',
    width: getWidth(80),
    height: getHeight(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background.primary,
    alignSelf: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 6,
    padding: getHeight(5),
    margin: getHeight(2)
  },
  container: {
    width: getWidth(100),
    height: getHeight(100),
    justifyContent: 'center'
    // alignItems: 'center'
  },
  textView: {
    width: getWidth(50),

    alignItems: 'center'
  },
  NumberView: {
    width: getWidth(20),

    alignItems: 'center'
  },
  NumberTextStyle: {
    fontSize: 28,
    fontWeight: '500',
    color: theme.text.heading
  }
})
export default styles
