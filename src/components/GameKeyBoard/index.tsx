import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import { GameKey } from '@components'
import styles from './styles'
import { images } from '@assets'
import { AppliedTheme } from '@constants'
const theme = AppliedTheme()
const GameKeyBoard: FC = () => {
  const [anykeyPressed, setAnyKeyPressed] = useState(0)
  return (
    <View>
      {/* Field to show Calculation */}
      <View style={styles.inputContainer}>
        <View style={styles.leftInputCOntainer}>
          <Text
            style={[
              styles.inputFieldText,
              {
                color: theme.button.light
              }
            ]}
          >
            480
          </Text>
          <Text
            style={[
              styles.inputFieldText,
              {
                color: theme.button.primary
              }
            ]}
          >
            -
          </Text>
          <Text
            style={[
              styles.inputFieldText,
              {
                color: theme.button.primary
              }
            ]}
          >
            230
          </Text>
        </View>
        <Pressable
          style={[
            styles.rightInputCOntainer,
            {
              backgroundColor:
                anykeyPressed >= 2
                  ? anykeyPressed >= 3
                    ? theme.button.success
                    : theme.button.primary
                  : theme.button.light
            }
          ]}
        >
          <Text
            style={[
              styles.inputFieldText,
              { color: theme.text.white }
            ]}
          >
            2
          </Text>
        </Pressable>
      </View>
      <View style={styles.keyWraper}>
        <GameKey
          key={1}
          value='1'
          color='#fff'
          onpress={() => {
            setAnyKeyPressed(anykeyPressed + 1)
          }}
        />
        <GameKey
          key={2}
          value='2'
          color='#fff'
          onpress={() => {
            setAnyKeyPressed(anykeyPressed + 1)
          }}
        />
        <GameKey
          key={3}
          value='3'
          color='#fff'
          onpress={() => {
            setAnyKeyPressed(anykeyPressed + 1)
          }}
        />
        <GameKey
          key={4}
          value='4'
          color='#fff'
          onpress={() => {
            setAnyKeyPressed(anykeyPressed + 1)
          }}
        />
        <GameKey
          key={5}
          value='icon'
          color='#fff'
          onpress={() => {
            setAnyKeyPressed(anykeyPressed + 1)
          }}
          icon={true}
          image={images.delete}
        />
      </View>
      <View style={styles.keyWraper}>
        <GameKey
          key={1}
          value='+'
          color='#fff'
          onpress={() => {
            setAnyKeyPressed(anykeyPressed + 1)
          }}
        />
        <GameKey
          key={2}
          value='x'
          color='#fff'
          onpress={() => {
            setAnyKeyPressed(anykeyPressed + 1)
          }}
        />
        <GameKey
          key={3}
          value='-'
          color='#fff'
          onpress={() => {
            setAnyKeyPressed(anykeyPressed + 1)
          }}
        />
        <GameKey
          key={4}
          value='÷'
          color='#fff'
          onpress={() => {
            setAnyKeyPressed(anykeyPressed + 1)
          }}
        />
        <GameKey
          key={5}
          value='icon'
          color='#fff'
          onpress={() => {
            setAnyKeyPressed(anykeyPressed + 1)
          }}
          icon={true}
          image={images.goback}
        />
      </View>
    </View>
  )
}

export default GameKeyBoard
