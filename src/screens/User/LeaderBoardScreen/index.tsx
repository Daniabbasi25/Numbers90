import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import {
  FullScreenPrimary,
  PositionBoard,
  PrimaryHeading
} from '@components'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './styles'
import { images } from '@assets'

const Data: any = [
  {
    name: 'Toprak',
    username: '@username',
    score: 1585,
    id: 1,
    image: 'https://picsum.photos/200/300'
  },
  {
    name: 'Hannah',
    username: '@username',
    score: 1559,
    id: 2,
    image: 'https://picsum.photos/200/300'
  },
  {
    name: 'Hannah',
    username: '@username',
    score: 1559,
    id: 3,
    image: 'https://picsum.photos/200/300'
  },
  {
    name: 'Hannah',
    username: '@username',
    score: 1559,
    id: 4,
    image: 'https://picsum.photos/200/300'
  },
  {
    name: 'Hannah',
    username: '@username',
    score: 1559,
    id: 5,
    image: 'https://picsum.photos/200/300'
  },
  {
    name: 'Hannah',
    username: '@username',
    score: 1559,
    id: 6,
    image: 'https://picsum.photos/200/300'
  },
  {
    name: 'Hannah',
    username: '@username',
    score: 1559,
    id: 7,
    image: 'https://picsum.photos/200/300'
  },
  {
    name: 'Hannah',
    username: '@username',
    score: 1559,
    id: 8,
    image: 'https://picsum.photos/200/300'
  },
  {
    name: 'Hannah',
    username: '@username',
    score: 1559,
    id: 9,
    image: 'https://picsum.photos/200/300'
  }
]
const LeaderBoard: FC = () => {
  const singleContainer = () => (
    <View style={styles.singleCotaniner}>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.userImage}
      />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.itemName}>Toprak</Text>
          <Text style={styles.userName}>@username</Text>
        </View>
        <View>
          <Text style={styles.scoreText}>1585</Text>
          <Image style={styles.downGrade} source={images.downGrade} />
        </View>
      </View>
    </View>
  )
  return (
    <FullScreenPrimary>
      <PrimaryHeading title='Leaderboard' />
      <ScrollView>
        <PositionBoard />
        {singleContainer()}
        <View style={styles.listContainer}>
          {Data.map((item: any, index: number) => (
            <View style={styles.listItemContainer} key={index}>
              <Image
                source={{ uri: 'https://picsum.photos/200/300' }}
                style={styles.userImage}
              />
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.itemName}>Toprak</Text>
                  <Text style={styles.userName}>@username</Text>
                </View>
                <View>
                  <Text style={styles.scoreText}>1585</Text>
                  <Image
                    style={styles.downGrade}
                    source={images.downGrade}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </FullScreenPrimary>
  )
}

export default LeaderBoard
