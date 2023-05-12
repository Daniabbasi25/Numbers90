/** @format */

import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '@helpers'
import { AppliedTheme } from '@constants'
const theme = AppliedTheme()
const styles = StyleSheet.create({
  container: {
    width: getWidth(90),
    height: getHeight(7),
    backgroundColor: theme.button.primary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.button.primary,
    justifyContent: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    color: theme.buttonText.primary,
    fontWeight: '600',
    fontSize: 17
  }
})
export default styles
