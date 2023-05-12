import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  TextStyle
} from 'react-native'
import React, { FC } from 'react'
import { AppliedTheme } from '@constants'
import { getHeight } from '@helpers'
const theme = AppliedTheme()
interface Props {
  title: string

  customestyle?: StyleProp<TextStyle>
}
const PrimaryHeading: FC<Props> = props => {
  const { title, customestyle } = props
  return (
    <View>
      <Text style={[styles.textStyle, customestyle]}>{title}</Text>
    </View>
  )
}

export default PrimaryHeading

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    color: theme.text.primaryheading,
    fontWeight: '600',
    fontSize: 22,
    marginVertical: getHeight(3)
  }
})
