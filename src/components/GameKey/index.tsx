import {
  Pressable,
  StyleSheet,
  Text,
  Dimensions,
  Image
} from 'react-native'
import React, { FC, useState } from 'react'
import { getHeight, getWidth } from '@helpers'
import { images } from '@assets'
import { AppliedTheme } from '@constants'
interface Props {
  value: string
  color: string
  onpress: () => void
  icon?: boolean
  image?: any
}
const theme = AppliedTheme()
const { width, height } = Dimensions.get('window')
const GameKey: FC<Props> = props => {
  const [selected, setSelected] = useState<boolean>(false)
  const { color, value, onpress, icon, image } = props
  return (
    <Pressable
      onPress={() => {
        if (!icon) {
          onpress()
          setSelected(true)
        }
      }}
      style={{
        // marginVertical: getHeight(1),
        // marginHorizontal: getWidth(2),
        backgroundColor: !selected ? color : theme.button.primary,
        paddingHorizontal: Math.min(width, height) * 0.07,
        paddingVertical: Math.min(width, height) * 0.05,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6
      }}
    >
      {!icon ? (
        <Text
          style={{
            color: selected ? '#fff' : theme.text.primaryheading,
            fontWeight: '600',
            fontSize: 18
          }}
        >
          {value}
        </Text>
      ) : (
        <Image
          source={image}
          style={{
            width: getWidth(4),
            resizeMode: 'contain',
            height: getHeight(2)
          }}
        />
      )}
    </Pressable>
  )
}

export default GameKey

const styles = StyleSheet.create({})
