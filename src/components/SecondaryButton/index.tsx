/** @format */

import { Text, View, TouchableOpacity } from 'react-native'
import { FC } from 'react'
import styles from './styles'

interface Props {
  title: string
  onPress: () => void
}

const SecondaryButton: FC<Props> = props => {
  const { onPress, title } = props
  return (

    <TouchableOpacity style={styles.container} onPress={onPress}>

      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}
export default SecondaryButton
