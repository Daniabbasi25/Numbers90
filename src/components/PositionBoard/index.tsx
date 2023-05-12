import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import { getHeight, getWidth } from '@helpers'
import { images } from '@assets'
import { AppliedTheme } from '@constants'
const theme = AppliedTheme()
const PositionBoard = () => {
  return (
    <View
      style={{
        height: getHeight(31),
        justifyContent: 'flex-end',
        marginBottom: getHeight(2)
      }}
    >
      <View style={styles.mainContainer}>
        <View style={styles.leftRightBox}>
          <View
            style={{
              position: 'absolute',
              bottom: getHeight(10),
              alignItems: 'center'
            }}
          >
            <Image
              source={images.ProfilePicture}
              style={[
                styles.runerUpImage,
                { borderColor: theme.postionBoard.secondColor }
              ]}
            />
            <View
              style={[
                styles.position,
                { backgroundColor: theme.postionBoard.secondColor }
              ]}
            >
              <Text
                style={{
                  transform: [{ rotate: '-55deg' }],
                  color: theme.postionBoard.userName
                }}
              >
                2
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.userName}>username</Text>
            <Text
              style={[
                styles.scorce,
                { color: theme.postionBoard.secondColor }
              ]}
            >
              1847
            </Text>
            <Text style={styles.userId}>@username</Text>
          </View>
        </View>
        <View style={styles.midleBox}>
          <View style={styles.winerImageContainer}>
            <Image source={images.crown} style={styles.crownImage} />
            <Image
              source={{ uri: 'https://picsum.photos/200/300' }}
              style={styles.winerImage}
            />
            <View
              style={[
                styles.position,
                {
                  backgroundColor: theme.postionBoard.toperBackground
                }
              ]}
            >
              <Text
                style={{
                  transform: [{ rotate: '-55deg' }],
                  color: theme.postionBoard.userName
                }}
              >
                1
              </Text>
            </View>
            <View>
              <Text style={styles.userName}>Toprak</Text>
              <Text
                style={[
                  styles.scorce,
                  { color: theme.text.primaryheading }
                ]}
              >
                1847
              </Text>
              <Text style={styles.userId}>@toprak</Text>
            </View>
          </View>
        </View>
        <View style={styles.leftRightBox}>
          <View
            style={{
              position: 'absolute',
              bottom: getHeight(10),
              alignItems: 'center'
            }}
          >
            <Image
              source={images.ProfilePicture}
              style={[
                styles.runerUpImage,
                { borderColor: theme.postionBoard.ThirdColor }
              ]}
            />
            <View
              style={[
                styles.position,
                { backgroundColor: theme.postionBoard.ThirdColor }
              ]}
            >
              <Text
                style={{
                  transform: [{ rotate: '-55deg' }],
                  color: theme.postionBoard.userName
                }}
              >
                3
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.userName}>username</Text>
            <Text
              style={[
                styles.scorce,
                { color: theme.postionBoard.ThirdColor }
              ]}
            >
              1847
            </Text>
            <Text style={styles.userId}>@username</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PositionBoard
