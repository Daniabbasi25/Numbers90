/** @format */

import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { FC } from 'react'
import { FlashList } from '@shopify/flash-list'
import styles from './styles'

interface IData {
  Number: string
  Title: string
  history: string
}

const Data: IData[] = [
  {
    Number: '476',
    Title:
      'The year that marks the fall of the Western Roman Empire, an event that had a profound impact on Western civilization.',
    history:
      'The year that marks the fall of the Western Roman Empire, an event that had a profound impact on Western civilization.'
  },
  {
    Number: '476',
    Title:
      'The year that marks the fall of the Western Roman Empire, an event that had a profound impact on Western civilization.',
    history:
      'The year that marks the fall of the Western Roman Empire, an event that had a profound impact on Western civilization.'
  },
  {
    Number: '476',
    Title:
      'The year that marks the fall of the Western Roman Empire, an event that had a profound impact on Western civilization.',
    history:
      'The year that marks the fall of the Western Roman Empire, an event that had a profound impact on Western civilization.'
  }
]

interface ICardProps {
  item: IData
}

const Card: FC<ICardProps> = ({ item }) => (
  <View style={styles.cardView}>
    <View style={styles.NumberView}>
      <Text style={styles.NumberTextStyle}>{item.Number}</Text>
      <Text>History</Text>
    </View>
    <View style={styles.textView}>
      <Text>{item.Title}</Text>
    </View>
    {/* <Text>{item.history}</Text> */}
  </View>
)

const SavedNumber: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={Data}
        renderItem={({ item }) => <Card item={item} />}
        estimatedItemSize={2000}
      />
    </SafeAreaView>
  )
}

export default SavedNumber
